const articles = [
    // {
    //     title: "არტიკლი",
    //     author: "ამბაკო შარაშენიძე",
    //     image: "image2.jpg",
    //     content: "აკფისგისფსოოფ"
    // },
    {
        title: "ალბერ კამიუს 'უცხო'",
        author: "ამბაკო შარაშენიძე",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804445955395584/The-Outsider.jpg?ex=65d9b3e6&is=65c73ee6&hm=8e4460f705379bce58f5e2d8ff25eda8fa09607202e413b09b723206ecaaee41&=&format=webp&width=316&height=467",
        content: "./articleTxts/theoutsider.txt"
    },
    {
        title: "ისტორიის ტოლსტოისეული დეკონსტრუქცია რომანის ,,ომი და მშვიდობა” მიხედვით.",
        author: "ირაკლი ჯაბუა",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804445481443328/tolstoy.jpg?ex=65d9b3e6&is=65c73ee6&hm=861e15946914ee3503e33c95ae49edcd47145ecf74e749f7ef23c47169b41ad6&=&format=webp&width=749&height=468",
        content: "./articleTxts/tolstoy.txt"
    }, 
    {
        title: "ჰერმან ჰესეს „ტრამალის მგელი”",
        author: "ნიკოლოზ მეტონიძე",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804396391174185/hesse.jpg?ex=65d9b3da&is=65c73eda&hm=bbd4507ace7c11814856a1e4095ae61b55a250c840711f6e98c8a5e5756d0238&=&format=webp&width=832&height=468",
        content: "./articleTxts/hesse.txt"
    },
    {
        title: "სილვია პლათის „ზარხუფი”",
        author: "ანამარი ხაჩატუროვი",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804423054626846/sylviaplath.jpg?ex=65d9b3e1&is=65c73ee1&hm=1cb8096167ad346e3e94bcf13241268f1b9d91eab4b020187455aeac9293afdc&=&format=webp&width=960&height=411",
        content: "./articleTxts/sylviaplath.txt"
    },
    {
        title: "ბენდის “Rage Against The Machine“ პოლიტიკა და აქტივიზმი",
        author: "ირაკლი ჯაბუა",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804412543574026/rage.jpg?ex=65d9b3de&is=65c73ede&hm=da3df0fe92a2dafec88e33077334d56371fdc6c1e119a86da4d2f4631ec4e13f&=&format=webp&width=624&height=468",
        content: "./articleTxts/rageagainstthemachine.txt"
    },
    {
        title: "ალბერ კამიუს „უცხო“",
        author: "მარიამ ბურდული",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804345073991721/camus1.jpg?ex=65d9b3ce&is=65c73ece&hm=f9ce5fb9e6b5c3ca94b17b7f114c78a3c6c145f90bc9b167c6478fc984cacde7&=&format=webp&width=832&height=468",
        content: "./articleTxts/camus.txt"
    },
    {
        title: "პინკ ფლოიდი - “The Wall”",
        author: "ირაკლი ჯაბუა",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804446202855424/thewall.jpg?ex=65d9b3e6&is=65c73ee6&hm=ec7941ab9798271bc7fe1a18c4c515dd04e36caa70decdab4e7f56f72c50c07d&=&format=webp",
        content: "./articleTxts/thewallpf.txt"
    },
    {
        title: "„12 განრისხებული მამაკაცი”",
        author: "როკო კეკენაძე",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804343454863400/12angrymen.jpg?ex=65d9b3ce&is=65c73ece&hm=aa70455e30eebe5add249d00d51fc3d9277cd49d0b8c8a88061378c1ea1cf81f&=&format=webp&width=834&height=468",
        content: "./articleTxts/12angrymen.txt"
    },
    {
        title: "ფრანც კაფკას „გარდასახვა”",
        author: "ანამარი ხაჩატუროვი",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804395389001738/kafka.jpg?ex=65d9b3da&is=65c73eda&hm=c4d255326c386022ed6725b9f2e882056d5f8e7b5e7de17890a4bbfe11e2952a&=&format=webp&width=624&height=468",
        content: "./articleTxts/kafkametamorphosis.txt"
    },
    {
        title: "„რამოდენიმე ინტერვიუ პირად საკითხებზე“ - რეცენზია",
        author: "მარიამ კუტალაძე",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1207420299600072824/sip.jpg?ex=65df94c8&is=65cd1fc8&hm=38c5fabee93633110f1becb3138c6242b0e09937c526475ae0d3ca9f4f583b77&=&format=webp",
        description: "„რამდენიმე ინტერვიუ პირად საკითხებზე“ - რეჟისორ ლანა ღოღობერიძის დრამატული მხატვრული ფილმია...",
        content: "./articleTxts/ramodenimeinterviu.txt"
      },
];

function loadArticleFromQuery() { 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const index = parseInt(urlParams.get('index') || 0);
    loadArticle(index);
}

function loadArticle(index) {
    const article = articles[index];
    document.getElementById("articleTitle").textContent = article.title;
    document.getElementById("articleAuthor").textContent = article.author;
    document.getElementById("articleImage").src = article.image;
    document.title = "Palace Of Cognition - " + article.title + " " + " - " + article.author;

    document.querySelector('meta[name="title"]').setAttribute("content", article.title);
    document.querySelector('meta[name="image"]').setAttribute("content", article.image);
    document.querySelector('meta[name="description"]').setAttribute("content", article.description);

    fetch(article.content)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(content => {
            document.getElementById("articleContent").textContent = content;
        })
        .catch(error => {
            console.error('There was a problem fetching the article content:', error);
        });

    shareButton = document.getElementById("shareButton");

    shareButton.addEventListener('click', function() {
        copyButton();
    });
    
    function copyButton() {
        let copyText = window.location.href;
        
        navigator.clipboard.writeText(copyText).then(function() {
            alert("Copied the text: " + copyText);
        }, function() {
            alert("Failed to copy text!");
        });
    }    
}


window.onload = loadArticleFromQuery;
