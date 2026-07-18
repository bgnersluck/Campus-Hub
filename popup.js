const siteList = document.getElementById("site-list");

sites.forEach(site => {

    const card = document.createElement("div");
    card.className = "site-card";

    const wrapper = document.createElement("div");
    wrapper.className = "icon-wrapper";

    const img = document.createElement("img");

    const label = document.createElement("span");
    label.textContent = site.name;

    if (site.icon) {
        img.src = chrome.runtime.getURL(site.icon);
    } else {
        const domain = new URL(site.url).hostname;
        img.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    }

    card.addEventListener("click", () => {
        chrome.tabs.create({ url: site.url });
    });

    wrapper.appendChild(img);  
    card.appendChild(wrapper);
    card.appendChild(label);

    siteList.appendChild(card);

});


