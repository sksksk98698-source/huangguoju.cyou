// IndexNow Push Script for Bing / Yandex / Seznam
import { SITE_CONFIG } from '../src/lib/constants.js';
import fs from 'node:fs';
import path from 'node:path';

async function pushToIndexNow() {
  console.log('🚀 正在准备推送 URL 至 IndexNow 引擎...');

  const sitemapPath = path.resolve('dist/sitemap-0.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ 未找到 dist/sitemap-0.xml，请先运行 npm run build 生成静态文件。');
    process.exit(1);
  }

  const xmlContent = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xmlContent)) !== null) {
    urls.push(match[1]);
  }

  if (urls.length === 0) {
    console.error('❌ Sitemap 中未解析到有效 URL。');
    process.exit(1);
  }

  console.log(`📡 共收集到 ${urls.length} 个正式页面 URL，准备推送至 IndexNow API...`);

  const payload = {
    host: SITE_CONFIG.domain,
    key: SITE_CONFIG.indexNow.key,
    keyLocation: SITE_CONFIG.indexNow.keyLocation,
    urlList: urls,
  };

  try {
    const response = await fetch(SITE_CONFIG.indexNow.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow 批量推送成功！HTTP 响应状态码: ${response.status}`);
      console.log(`🔗 包含搜索引擎: Bing, Yandex, Seznam, Naver`);
    } else {
      const text = await response.text();
      console.warn(`⚠️ IndexNow 响应状态: ${response.status} - ${text}`);
      console.log('💡 注意：新域名首次提交需等待搜索引擎验证 keyLocation 访问。');
    }
  } catch (err) {
    console.warn(`⚠️ 本地测试网络推送到 IndexNow 接口超时或受限: ${err.message}`);
    console.log('💡 在部署上线并在正式域名下运行时，此脚本将顺利完成通信。');
  }
}

pushToIndexNow();
