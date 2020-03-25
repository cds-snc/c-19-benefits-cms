import Page from "/admin/preview-templates/page.js";

CMS.registerPreviewTemplate("enPages", Page);
CMS.registerPreviewTemplate("frPages", Page);

CMS.registerPreviewStyle("/static/assets/GCWeb/css/theme.min.css");

// Register any CSS file on the home page as a preview style
fetch("/en/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
