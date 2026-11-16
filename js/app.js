// FAZ 5 - Başlangıç kodunda bilerek bırakılmış hatalar vardır.
const products = [
  {
    id: 1,
    name: "Kablosuz Kulaklık",
    brand: "NovaSound",
    category: "Elektronik",
    price: 2499,
    stock: 18,
    icon: "🎧",
    tags: ["bluetooth", "ses"],
  },
  {
    id: 2,
    name: "Masa Lambası",
    brand: "Luma",
    category: "Ev",
    price: 899,
    stock: 7,
    icon: "💡",
    tags: ["aydınlatma"],
  },
  {
    id: 3,
    name: "JavaScript Rehberi",
    brand: "CodePress",
    category: "Kitap",
    price: 420,
    stock: 32,
    icon: "📘",
    tags: ["yazılım", "eğitim"],
  },
  {
    id: 4,
    name: "Basic Tişört",
    brand: "North",
    category: "Giyim",
    price: 599,
    stock: 0,
    icon: "👕",
    tags: ["pamuk"],
  },
  {
    id: 5,
    name: "Mekanik Klavye",
    brand: "KeyLab",
    category: "Elektronik",
    price: 3299,
    stock: 11,
    icon: "⌨️",
    tags: ["mekanik", "oyun"],
  },
  {
    id: 6,
    name: "Seramik Kupa",
    brand: "Mori",
    category: "Ev",
    price: 280,
    stock: 24,
    icon: "☕",
    tags: ["mutfak"],
  },
  {
    id: 7,
    name: "CSS Not Defteri",
    brand: "CodePress",
    category: "Kitap",
    price: 350,
    stock: 14,
    icon: "📝",
    tags: ["eğitim"],
  },
  {
    id: 8,
    name: "Sırt Çantası",
    brand: "Urban",
    category: "Giyim",
    price: 1450,
    stock: 5,
    icon: "🎒",
    tags: ["seyahat"],
  },
];
const students = [
  {
    id: 101,
    name: "Ada Demir",
    department: "Frontend",
    grades: { midterm: 82, final: 91 },
    active: true,
  },
  {
    id: 102,
    name: "Mert Kaya",
    department: "Backend",
    grades: { midterm: 48, final: 55 },
    active: true,
  },
  {
    id: 103,
    name: "Ece Yılmaz",
    department: "Frontend",
    grades: { midterm: 94, final: 96 },
    active: true,
  },
  {
    id: 104,
    name: "Can Arslan",
    department: "Data",
    grades: { midterm: 67, final: 72 },
    active: false,
  },
  {
    id: 105,
    name: "Deniz Aydın",
    department: "Backend",
    grades: { midterm: 76, final: 81 },
    active: true,
  },
  {
    id: 106,
    name: "Selin Koç",
    department: "Data",
    grades: { midterm: 35, final: 42 },
    active: true,
  },
];
const currency = (value) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
const getStudentAverage = (student) =>
  student.grades.midterm * 0.4 + student.grades.final * 0.6;
function sortProducts(list, type) {
  if (type === "price-asc") return list.sort((a, b) => a.price - b.price);
  if (type === "price-desc") return list.sort((a, b) => b.price - a.price);
  if (type === "name")
    return list.sort((a, b) => a.name.localeCompare(b.name, "tr"));
  return list;
}
function getFilteredProducts() {
  const term = document
    .querySelector("#searchInput")
    .value.toLocaleLowerCase("tr");
  const category = document.querySelector("#categoryFilter").value;
  const type = document.querySelector("#sortSelect").value;
  const filtered = products.filter(
    (product) =>
      (product.name.toLocaleLowerCase("tr").includes(term) ||
        product.brand.toLocaleLowerCase("tr").includes(term)) &&
      (category === "all" || product.category === category)
  );
  return sortProducts(filtered, type);
}
function renderProducts() {
  const list = getFilteredProducts();
  const cards = list.forEach(
    (product) =>
      `<article class="product"><div class="icon">${product.icon}</div><h3>${
        product.name
      }</h3><p class="muted">${product.brand} · ${
        product.category
      }</p><div class="productfoot"><b>${currency(
        product.price
      )}</b><span class="stock">${product.stock} stok</span></div></article>`
  );
  document.querySelector("#productGrid").innerHTML = cards.join("");
  document
    .querySelector("#productEmpty")
    .classList.toggle("hidden", list.length > 0);
  document.querySelector("#visibleCount").textContent = list.length;
  document.querySelector("#heroProductCount").textContent = products.length;
  const total = list.reduce((sum, product) => sum + product.price);
  document.querySelector("#totalValue").textContent = currency(total);
  document.querySelector("#averagePrice").textContent = currency(
    total / list.length
  );
}
function renderStudents() {
  document.querySelector("#studentTable").innerHTML = students
    .map((student) => {
      const average = getStudentAverage(student.grades);
      const passed = average >= 50;
      return `<tr><td>${student.name}</td><td>${
        student.department
      }</td><td>${average.toFixed(1)}</td><td><span class="status ${
        passed ? "passed" : "failed"
      }">${passed ? "Başarılı" : "Geliştirilmeli"}</span></td></tr>`;
    })
    .join("");
  const averages = students.map(getStudentAverage);
  const average =
    averages.reduce((sum, value) => sum + value, 0) / students.length;
  const successful = students.filter(
    (student) => getStudentAverage(student) >= 50
  );
  document.querySelector("#studentCount").textContent = students.length;
  document.querySelector("#classAverage").textContent = average.toFixed(1);
  document.querySelector("#successfulCount").textContent = successful.length;
  document.querySelector("#highestGrade").textContent = Math.max(
    ...averages
  ).toFixed(1);
  const departments = students.reduce((groups, student) => {
    groups[student.department] = (groups[student.department] || 0) + 1;
    return groups;
  });
  document.querySelector("#departmentStats").innerHTML = Object.entries(
    departments
  )
    .map(
      ([name, count]) =>
        `<div class="insightrow"><span>${name}</span><b>${count}</b></div>`
    )
    .join("");
  document.querySelector("#successfulStudents").innerHTML = successful
    .map(
      (student) =>
        `<div class="insightrow"><span>${
          student.name
        }</span><b>${getStudentAverage(student).toFixed(1)}</b></div>`
    )
    .join("");
}
document
  .querySelector("#searchInput")
  .addEventListener("input", renderProducts);
document
  .querySelector("#categoryFilter")
  .addEventListener("change", renderProducts);
document
  .querySelector("#sortSelect")
  .addEventListener("change", renderProducts);
renderProducts();
renderStudents();
