
// აქედან დაამატე არტიკლები
var articles = [
    // ეს დააკოპირე და გამოიყენე, დააჭირე ctrl + /  რომ მოაშორო კომენტი
    // {
    //     header: "Article 1 Header",
    //     image: "/Images/thewallthumbnail.jpg",
    //     description: "Description of Article 1",
    //     link: "./article.html?index=0"
    // },

    {
      header: "ამბაკო შარაშენიძე - ალბერ კამიუს 'უცხო'",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804445955395584/The-Outsider.jpg?ex=65d9b3e6&is=65c73ee6&hm=8e4460f705379bce58f5e2d8ff25eda8fa09607202e413b09b723206ecaaee41&=&format=webp&width=316&height=467",
      description: "ალბერ კამიუს გასაოცარი ნაწარმოები „უცხო“, რომელიც კამიუმ  1942 წელს დაწერა, ერთი ახალგაზრდა კაცის, მერსოს ცხოვრებას ეხება,  იგი ერთ დღეს იგებს რომ დედამისი თავშესაფარში გარდაიცვალა, მაგრამ მერსო ამის გამო დიდად არ ნაღვლიანდება... ",
      link: "./article.html?index=0"
    },
    {
        header: "ირაკლი ჯაბუა - ისტორიის ტოლსტოისეული დეკონსტრუქცია რომანის ,,ომი და მშვიდობა” მიხედვით.",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804413789274184/napoleon.jpg?ex=65d9b3df&is=65c73edf&hm=b5ef385559ca6d3516718860a4e17030bd794a996ee3b742cc8c895e9edf17d6&=&format=webp&width=702&height=468",
        description: "„ომი და მშვიდობა“ განთქმულია იმ უდიდესი სიუჟეტური ლანდშაფტით, რომელსაც ტოლსტოი გვიხატავს. ნაწარმოები სიღრმისეული, დახვეწილი პერსონაჟებით გამოირჩევა, რომლებიც გაცოცხლებულია მათი ურთიერთობებით საზოგადოებასა და ისტორიულ ეპოქასთან...",
        link: "./article.html?index=1"
    },
    {
        header: "ნიკოლოზ მეტონიძე - ჰერმან ჰესეს 'ტრამალის მგელი'",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804396651225188/hesse1.jpg?ex=65d9b3da&is=65c73eda&hm=d16f3622d6c195087a2c502741ebc307bc7859870b6afd82821db72467f57e32&=&format=webp&width=368&height=468",
        description: "ჰერმან ჰესეს წიგნში ,,ტრამალის მგელი“, ჩვენ, პროტაგონისტ  ჰარი ჰალერს ვეცნობით, რომელიც ორმოცდაათიოდე წლის კაცია. ის თავის თავს ტრამალის მგელს უწოდებს და საკუთარი ცხოვრების მანძილზე, სიმარტოვეში ცდილობს ძალის პოვნას...",
        link: "./article.html?index=2"
    },
    {
        header: "ანამარი ხაჩატუროვი - სილვია პლათის 'ზარხუფი'",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804344381808640/belljar.jpg?ex=65d9b3ce&is=65c73ece&hm=e0a0f6dd46a017ea351bc6251182fbaa39d4f57f6254bba97f77225275f08b16&=&format=webp",
        description: "სილვია პლათის ავტობიოგრაფიული, პირველი და უკანასკნელი რომანის ,,ზარხუფი“, საზოგადოებაში პოპულარობის მოპოვების ძირითადი მიზეზი ფემინიზმის თემაზე ღიად, თამამად საუბარი გახლავთ...",
        link: "./article.html?index=3"
    },
    {
        header: "ირაკლი ჯაბუა - ბენდის ,,Rage Against The Machine“ პოლიტიკა და აქტივიზმი",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804422395985930/rage1.jpg?ex=65d9b3e1&is=65c73ee1&hm=99ed487edc12af5f2a383cf5bd9760e34743d7475978d8f36ae60aa12f1f6761&=&format=webp&width=336&height=468",
        description: "როკ ჯგუფი “Rage Against the Machine“, 1991 წელს, ლოს ანჯელესში ჩამოყალიბდა. ის 90-იანი წლების ალტერნატიული როკისა და მეტალის სამყაროში, ერთ-ერთ ყველაზე მნიშვნელოვან და გარდამტეხ ჯგუფად მიიჩნევა",
        link: "./article.html?index=4"
    },
    {
        header: "მარიამ ბურდული - ალბერ კამიუს „უცხო“",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804422832201788/stranger.jpg?ex=65d9b3e1&is=65c73ee1&hm=4e8be381e44f77534064c68ade6e856638892a9e7da7172eb3e7ff81ca8391ce&=&format=webp",
        description: "რომანში, „უცხო”, ალბერ კამიუ მკითხველს ეგზისტენციალურ საკითხებთან მიმართებით საკუთარ შეხედულებებს უზიარებს. ნაწარმოების მთავარი გმირი, მერსო ალჟირში მცხოვრები ახალგაზრდა ფრანგია...",
        link: "./article.html?index=5"
    },
    {
        header: "ირაკლი ჯაბუა - პინკ ფლოიდი - ,,The Wall“",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804446593064990/thewallthumbnail.jpg?ex=65d9b3e6&is=65c73ee6&hm=513ce6f8e3738ab9c42dd426a1ff551a3f4a7a2907276b2bec320d2089018e60&=&format=webp",
        description: "ბრიტანული როკ ჯგუფის, „პინკ ფლოიდის“ ალბომი „კედელი“ (“The Wall”) ყველასათვის ცნობილი უნდა იყოს. იგი, პროგრესული როკის ჟანრში ერთ-ერთ ყველაზე მნიშვნელოვან ნამუშევრად მიიჩნევა...",
        link: "./article.html?index=6"
    },
    {
        header: "როკო კეკენაძე - „12 განრისხებული მამაკაცი“ - განხილვა", 
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804343815835658/12-Angry-Men-thumbnail.jpg?ex=65d9b3ce&is=65c73ece&hm=eaab838fdc06b38958acaa2317626a5f310eac35413a58599c2e40690be27540&=&format=webp&width=308&height=467",
        description: "სიდნი ლუმეტის 1957 წლის ამერიკული ფილმი „12 განრისხებული მამაკაცი” გვიამბობს ერთ ბიჭზე, რომელსაც ბრალად მამის მკვლელობა ედება...",
        link: "./article.html?index=7"
    },
    {
        header: "ანამარი ხაჩატუროვი - ფრანც კარფკას „გარდასახვა“",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804413428695040/metamorphosis.jpg?ex=65d9b3de&is=65c73ede&hm=d58c4ed19284c282a13a440269398362acfd55e7fb32b66a011361471fe684ef&=&format=webp&width=332&height=468",
        description: "ფრანც კაფკას ნოველას ,,გარდასახვა” დღევანდელ დღეს დიდი ადგილი უკავია მკითხველთა გულებსა და ლიტერატურაში. ...",
        link: "./article.html?index=8"
    },
    {
      header: "მარიამ კუტალაძე - „რამოდენიმე ინტერვიუ პირად საკითხებზე“ - რეცენზია",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1207420342092570696/Screenshot_2024-02-15_001514.png?ex=65df94d2&is=65cd1fd2&hm=ca70674a1bc8f3fafa730f08e577a0c21e2777c1713fe3db419cbfe3fcbc82fa&=&format=webp&quality=lossless&width=315&height=468",
      description: "„რამდენიმე ინტერვიუ პირად საკითხებზე“ - რეჟისორ ლანა ღოღობერიძის დრამატული მხატვრული ფილმია...",
      link: "./article.html?index=9"
    },
  ];
  
  function createArticles() {
    console.log("Creating content...");
    var container = document.getElementById("contentContainer");
    console.log("Container:", container);
  
    articles.forEach(function(article) {
      var articleDiv = document.createElement("div");
      articleDiv.classList.add("article");
  
      var header = document.createElement("h2");
      header.textContent = article.header;
  
      var image = document.createElement("img");
      image.src = article.image;
      image.alt = article.header;
  
      var description = document.createElement("p");
      description.textContent = article.description;
  
      var link = document.createElement("a");
      link.href = article.link; 
      link.textContent = "მეტის ნახვა";
      link.id = "ahref"
  
      articleDiv.appendChild(header);
      articleDiv.appendChild(image);
      articleDiv.appendChild(description);
      articleDiv.appendChild(link);
  
      container.appendChild(articleDiv);
    });
  }
  
  window.onload = function() {
    console.log("Window loaded.");
    createArticles();
  };
  