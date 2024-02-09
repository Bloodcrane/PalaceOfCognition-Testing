
// აქედან დაამატე ფილმები
var articles = [
    // ეს დააკოპირე და გამოიყენე, დააჭირე ctrl + /  რომ მოაშორო კომენტი
    // {
    //     header: "Film 1 Header",
    //     image: "/Images/film.jpg",
    //     description: "Description of Film 1",
    //     link: "https://"
    // },

    {
      header: "ველოსიპედის გამტაცებელნი (1948) - რეჟისორი ვიტორიო დე სიკა",
      image: "/Images/bicycle-thieves.jpg",
      description: "„ველოსიპედის გამტაცებელნი“ - ნეორეალიზმის თვალსაჩინო ნიმუშია. ფილმი მოგვითხრობს ღარიბი იტალიელი მამაკაცის ამბავს, რომელიც მოპარულ ველოსიპედს ეძებს, მის გარეშე, იგი სამსახურს დაკარგავს და ოჯახის რჩენას ვერ შეძლებს. ნამუშევარში ომისშემდგომ იტალიაში დაბუდებული მძიმე სოციალური მდგომარეობაა ასახული.",
      link: "https://"
    },
    {
      header: "პატარა (1921) - რეჟისორი ჩარლი ჩაპლინი",
      image: "/Images/the-kid.jpg",
      description: "„პატარა“ ჩარლი ჩაპლინის ნამუშევარია. მარტოხელა მუშა, ღარიბულ სახლში შეიკედლებს უცხო ბავშვს, შემდეგ კი, იძულებულია რომ მას დაშორდეს. რთულია, რომ ხსენებულმა ნამუშევარმა მაყურებელი აღელვების გარეშე დატოვოს.",
      link: "https://"
    },
    {
      header: "მე, დენიელ ბლეიკი (2016) - რეჟისორი ქენ ლოუჩი",
      image: "/Images/I-Daniel-Blake.jpg",
      description: "„მე, დენეილ ბლეიკი“ - ბრიტანული სოციალური კინოა. გულის შეტევის გადატანის შემდგომ, 59 წლის დენიელ ბლეიკს უწევს ებრძოლოს სახელმწიფოს ბიუროკრატიულ მანქანას, სამუშაოსა და სოციალური დახმარების მიღების მიზნით.",
      link: "https://"
    },
    {
      header: "პროექტი „ფლორიდა“ (2017) - რეჟისორი შონ ბეიკერი",
      image: "/Images/florida-project.jpg",
      description: "„პროექტი ფლორიდა“ - ერთი ზაფხულს, ფლორიდის ღარიბულ მოტელში მცხოვრები  ბავშვების შესახებ მოგვითხრობს. ფილმი ამერიკის ღარიბი მოსახლეობის ყოველდღიურობაში არსებულ ეკონომიკურ პრობლემებს აღგვიწერს.",
      link: "https://"
    },
    {
      header: "400 დარტყმა (1959) - რეჟისორი ფრანსუა ტრიუფო",
      image: "/Images/the-400-blows.jpg",
      description: ">„400 დარტყმა“ ფრანგული ახალი ტალღის სულისჩამდგმელი ნამუშევარია. ფილმი ემოციურად მიტოვებული მოზარდის      შესახებ მოგითხრობს,  ბიჭს აკლია ყურადღება მშობლებისა და სკოლისაგან. ფილმი ნაწილობრივ ავტობიოგრაფიულია, რაც ნამუშევარში აღწერილ პრობლემატიკას მეტ სანდოობას ანიჭებს.",
      link: "https://"
    },
    {
      header: "მშვიდობით ბავშვებო (1987) - რეჟისორი ლუი მალი",
      image: "/Images/goodbye-children.jpg",
      description: "მშვიდობით ბავშვებო“ - ფილმი მეორე მსოფლიო ომის დროს, ნაცისტების მიერ ოკუპირებულ საფრანგეთში ერთ-ერთი კათოლიკური სკოლის შესახებ მოგვითხრობს. სკოლის ხელმძღვანელობის მიერ შეფარებულია რამდენიმე ებრაელი ბავშვი, ნამუშევარი მორალური დილემების, თანაგრძნობის, ერთგულებისა და სხვა ადამიანური საკითხების გარშემო ტრიალებს.",
      link: "https://"
    },
    {
      header: "უკანასკნელი მოჰიკანი (1998) - რეჟისორი მაიკლ მენი",
      image: "/Images/the-last-of-the-mohicans.jpg",
      description: "„უკანასკნელი მოჰიკანი“ - ფილმი აღგვიწერს მეთვრამეტე საუკუნეში ამერიკის კოლონიზაციისათვის წარმოებულ ომსა და ინდიელების ჩართულობას ამ ბრძოლაში.",
      link: "https://"
    },
    {
      header: "ეს მშვენიერი ცხოვრება (1946) - რეჟისორი ფრენკ კაპრა",
      image: "/Images/Its-A-Wonderful-Life.jpg",
      description: "„ეს მშვენიერი ცხოვრება“ - ამერიკული საშობაო ფილმი. პატარა ქალაქში, ბედფორდ ფოლსში მცხოვრები კაცი სადაზღვევო კომპანიის მფლობელია, იგი მოსიყვარულე ქმარი და მამაა, რომლის ცხოვრებაშიც ქალაქში არსებული მწვავე კლასობრივი პრობლემატიკა იჭრება.",
      link: "https://"
    },
  ];
  
  // Function to dynamically create articles
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
  
      // Append elements to articleDiv
      articleDiv.appendChild(header);
      articleDiv.appendChild(image);
      articleDiv.appendChild(description);
      articleDiv.appendChild(link);
  
      // Append articleDiv to container
      container.appendChild(articleDiv);
    });
  }
  
  // Call the function to create articles when the page loads
  window.onload = function() {
    console.log("Window loaded.");
    createArticles();
  };
  