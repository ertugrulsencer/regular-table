# Regular Table

Düzenli dinamik tablolar oluşturmak için kullanılır. Regular Table'ı kullanmak için Css ve JavaScipt dosyasını projenize dahil etmeniz gerekir;

Css: `<link rel="stylesheet" href="your-path/regular-table.css" />`

JavaScript: `<script src="your-path/regular-table.js"></script>`

## Regular Table Hızlı Başlangıç

Gerekli dosysları projemize dahil ettiğimize göre tablo oluşturmaya başlayabiliriz, tabloyu oluşturmak için parent HTML elementi oluşturuyoruz;

`<div class="example-table"></div>`

Tablo için örnek veriler oluşturalım;

`
const myData = [
			['Ali', 'Mehmet', 13],
			['Ertuğrul Sencer', 'UZUN', 17],
			['Mehmet Ali', 'Teken', 15],
			['Bilgebayunçur', 'Bolatlı', 12],
			['Bağan', 'Baturalp', 13]
		]
`

## Regular Table Kullanımı

Dataları kullanarak bir tablo oluşturmak için `RegularTable` sınıfından yeni bir instances oluşturuyoruz, `RegularTable` sınıfı constructor metodu içinde zorunlu olarak parent elemanı alıyor.
Parent eleman olarak oluşturduğumuz `example-table` sınıf ismine sahip div'i yazıyoruz. İkinci paramtre data ve diğer seçenekleri içeren bir obje alıyor. Örnek;

`
const rt = new RegularTable('.example-table', {
			headData: ['Ad', 'Soyad', 'Yaş'],
			bodyData: myData
		});
`

Raguar Table kullanmak bu kadar basit. Performanslı ve kolay kullanımın keyfini çıkarın :)
