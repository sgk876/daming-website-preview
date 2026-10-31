(function () {
  const menus = Array.from(document.querySelectorAll("[data-menu]"));

  function closeSearch() {
    const modal = document.querySelector("[data-search]");
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function closeMenus(except) {
    menus.forEach((menu) => {
      if (menu === except) return;
      menu.classList.remove("is-open");
      const btn = menu.querySelector("button");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  menus.forEach((menu) => {
    const btn = menu.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = menu.classList.contains("is-open");
      closeMenus();
      if (!open) {
        menu.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
    menu.addEventListener("mouseleave", () => {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", () => closeMenus());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenus();
      closeSearch();
      const mobile = document.querySelector(".mobile-nav");
      if (mobile) mobile.open = false;
    }
  });

  document.querySelectorAll("[data-mega-cat]").forEach((cat) => {
    const show = () => {
      const id = cat.getAttribute("data-mega-cat");
      document.querySelectorAll("[data-mega-cat]").forEach((item) => {
        item.classList.toggle("is-active", item === cat);
      });
      document.querySelectorAll("[data-mega-panel]").forEach((panel) => {
        panel.hidden = panel.getAttribute("data-mega-panel") !== id;
      });
    };
    cat.addEventListener("mouseenter", show);
    cat.addEventListener("focus", show);
    cat.addEventListener("click", show);
  });

  const track = document.querySelector("[data-carousel]");
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  if (track && prev && next) {
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 4;
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= max;
      const idle = prev.disabled && next.disabled;
      prev.style.visibility = idle ? "hidden" : "visible";
      next.style.visibility = idle ? "hidden" : "visible";
    };
    const step = () => Math.max(260, Math.round(track.clientWidth * 0.72));
    prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  const index = [
    ["Home", "index.html", "oem touch display engineering reply shenzhen"],
    ["Products", "products.html", "pcap ctp cover lens keypad bonding lcm assembly"],
    ["8.0-inch PCAP reference", "products.html#pcap-80", "8.0 inch g+g usb reference drawing"],
    ["10.5-inch PCAP reference", "products.html#pcap-105", "10.5 inch fpc reference drawing"],
    ["Cover lenses", "products.html#covers", "glass pc pmma cover print window"],
    ["Touch keypads", "products.html#keypads", "fixed keys icons capacitive keypad"],
    ["Optical bonding", "products.html#bonding", "oca fog cover sensor lcd stack"],
    ["LCD module range", "products.html#lcm", "lcm lcd range not a sku"],
    ["Touch-display assemblies", "products.html#assemblies", "tdm driver cable host"],
    ["Applications", "applications.html", "industrial hmi hvac medical robot terminal"],
    ["Industrial HMI", "applications.html#industrial", "machine interface host field"],
    ["HVAC and water heating", "applications.html#hvac", "keypad moisture control"],
    ["Medical devices", "applications.html#medical", "cleaning gloves component not device approval"],
    ["Terminals and robots", "applications.html#terminals", "smart ai robot requirement set"],
    ["About DaMing", "about.html", "shenzhen baoan facility 2018 company"],
    ["Project path", "about.html#path", "define coordinate develop sample"],
    ["Certificate copies", "about.html#certificates", "iso 9001 14001 13485 iatf 16949"],
    ["Engineering notes", "notes.html", "reference pending glove wet touch"],
    ["Contact", "contact.html", "inquiry brief chloe si guokun formsubmit"],
    ["Privacy", "privacy.html", "inquiry delivery formsubmit privacy"]
  ];

  const searchBtn = document.querySelector("[data-search-open]");
  const modal = document.querySelector("[data-search]");
  const searchInput = document.querySelector("[data-search-input]");
  const results = document.querySelector("[data-search-results]");

  function renderSearch(query) {
    if (!results) return;
    const q = query.trim().toLowerCase();
    const hits = index.filter((row) => !q || (row[0] + " " + row[2]).toLowerCase().includes(q));
    results.innerHTML = "";
    hits.slice(0, 8).forEach((row, i) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = row[1];
      a.innerHTML = row[0] + "<small>" + row[1] + "</small>";
      if (i === 0) a.className = "is-active";
      li.appendChild(a);
      results.appendChild(li);
    });
    if (!hits.length) {
      const li = document.createElement("li");
      li.textContent = "No matching page in this preview.";
      results.appendChild(li);
    }
  }

  if (searchBtn && modal && searchInput) {
    searchBtn.addEventListener("click", () => {
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      renderSearch("");
      searchInput.value = "";
      searchInput.focus();
    });
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeSearch();
    });
    searchInput.addEventListener("input", () => renderSearch(searchInput.value));
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const first = results && results.querySelector("a");
        if (first) location.href = first.href;
      }
    });
  }

  const form = document.querySelector("[data-inquiry]");
  if (form) {
    const params = new URLSearchParams(location.search);
    const topic = params.get("topic");
    const select = form.querySelector("[name=interest]");
    if (topic && select && select.querySelector('option[value="' + topic + '"]')) select.value = topic;
    const application = params.get("application");
    const appInput = form.querySelector("[name=application]");
    if (application && appInput && !appInput.value) appInput.value = application;
    const error = form.querySelector("[data-form-error]");
    const success = document.querySelector("[data-form-success]");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (error) error.textContent = "";
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      if (String(data.get("_honey") || "").trim()) return;
      const consent = form.querySelector("[name=consent]");
      if (!consent || !consent.checked) {
        if (error) error.textContent = "Please confirm we may use these details to reply.";
        return;
      }
      const button = form.querySelector("[type=submit]");
      button.disabled = true;
      button.textContent = "Sending…";
      const payload = {
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        phone: data.get("phone") || "Not stated",
        interest: data.get("interest"),
        application: data.get("application"),
        fixed_items: data.get("fixed") || "Not stated",
        open_items: data.get("open") || "Not stated",
        _subject: "DaMing overseas preview inquiry",
        _replyto: data.get("email"),
        _template: "table",
        source_page: location.href,
        consent: "Contact consent given on the overseas English preview form"
      };
      try {
        const response = await fetch("https://formsubmit.co/ajax/04132349fa4617e4e09b614a8a4f7d48", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error("Form service declined the request");
        form.hidden = true;
        if (success) success.hidden = false;
      } catch (err) {
        if (error) error.textContent = "The form could not be sent from this browser. Email sgk@touch-displays.com directly.";
        button.disabled = false;
        button.textContent = "Send the brief";
      }
    });
  }
})();
