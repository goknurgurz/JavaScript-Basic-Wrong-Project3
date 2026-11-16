# Kod Okuma ve Analiz – Faz 5

Soruları kendi cümlelerinle cevapla. Önce tahmin et, sonra tarayıcıda test et.

## A. Objeler ve diziler

1. `products` dizisinin elemanlarının veri tipi nedir?
2. Bir ürünün `name`, `price` ve `category` alanlarına nasıl erişirsin?
3. `products[0]` hangi ürünü verir?
4. `products.length` neyi ifade eder?
5. `products[0].tags[1]` hangi veriye erişir?
6. Dot notation ile bracket notation farkı nedir?
7. `Object.keys()` ve `Object.values()` ne döndürür?
8. `Object.entries()` hangi yapıyı döndürür?
9. Destructuring ile bir ürünün `name` ve `price` alanlarını ayır.
10. Spread ile bir dizinin kopyasını nasıl oluşturursun?

## B. Array metotları

11. `map()` hangi durumda tercih edilir?
12. `filter()` ile `find()` farkı nedir?
13. `forEach()` neden `map()` yerine her zaman kullanılamaz?
14. `reduce()` hangi hesaplamalarda kullanışlıdır?
15. `some()` ve `every()` farkı nedir?
16. `slice()` ve `splice()` orijinal diziyi nasıl etkiler?
17. `sort()` neden ana dizinin sırasını değiştirebilir?
18. `Set` ile tekrar eden değerleri nasıl kaldırırsın?
19. `findIndex()` hangi durumda işe yarar?
20. `includes()` ve `indexOf()` ne tür kontroller yapar?

## C. Proje kodunu incele

21. `sortProducts()` içinde `list.sort()` kullanılması hangi yan etkiye neden olabilir?
22. `forEach()` ile oluşturulan `cards` değişkeninin değeri nedir?
23. `reduce()` toplamında başlangıç değeri verilmezse ne olabilir?
24. Filtre sonucu boş olduğunda ortalama hesabında hangi edge case oluşur?
25. `getStudentAverage()` hangi yapıda parametre bekliyor? Çağrıda ne gönderiliyor?
26. Bölüm gruplamasındaki `reduce()` neden yanlış sonuç verebilir?
27. `Object.entries()` sonucundaki her eleman nasıl bir dizidir?
28. Filtreleme ve sıralama hangi sırayla yapılmalı? Neden?
29. Orijinal diziyi değiştirmeden nasıl sıralama yaparsın?
30. Bu projede `map`, `filter`, `reduce`, `forEach` görevlerini açıkla.

## D. Test kayıtları

| Test               | Beklenen davranış         | Gerçek sonuç |
| ------------------ | ------------------------- | ------------ |
| Ürün arama         | İsim ve markada arama     |              |
| Kategori filtresi  | Seçili kategori           |              |
| Artan sıralama     | En ucuz ürün ilk sırada   |              |
| Azalan sıralama    | En pahalı ürün ilk sırada |              |
| Sonuçsuz arama     | Boş durum mesajı          |              |
| Öğrenci ortalaması | Vize %40 + final %60      |              |
| Bölüm gruplama     | Doğru bölüm sayıları      |              |

## E. Doğru metodu seç

- Ürünlerden yeni bir fiyat dizisi üretmek:
- Fiyatı 1000 TL üzerindeki ürünleri seçmek:
- Tüm fiyatların toplamını bulmak:
- Her ürün için DOM kartı oluşturmak:
- Başarılı öğrencileri seçmek:
- ID'ye göre tek ürün kaydı bulmak:
