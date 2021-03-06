/*** Seeding script for database ***/

const db = require('./db');
const faker = require('faker');

// create 100 products
const insertProducts = async () => {
  for (let i = 0; i < 100; i++) {
    let randomProductName = faker.commerce.productName();
    let queryStr = 'INSERT INTO products(product_name) VALUES (?)';
    await db.query(queryStr, [randomProductName]);
  }
};

insertProducts();

let s3AvatarDomain = 'https://hr-fec.s3.us-east-2.amazonaws.com/random-avatars/';

let randomAvatars = ['aiony-haust-S-igcQ6qpg4-unsplash.jpg', 'alex-avalos-vExD0Y0Aei0-unsplash.jpg', 'alexander-krivitskiy-1gVM_fHe8XY-unsplash.jpg', 'alexander-krivitskiy-3FvwtxjkICw-unsplash.jpg', 'alexander-krivitskiy-7OQOllZ5zHg-unsplash.jpg', 'alexander-krivitskiy-KtS7Fu48LLw-unsplash.jpg', 'alexander-krivitskiy-VuPjSX8LOMU-unsplash.jpg', 'alexander-krivitskiy-ZJ2NM_zI37U-unsplash.jpg', 'alexander-krivitskiy-z6PP94K7ngE-unsplash.jpg', 'alexandra-i-aob_fYlfmNM-unsplash.jpg', 'amanda-ware-8-mUWfgrk0k-unsplash.jpg', 'ana-itonishvili-7WYM9m8-7kE-unsplash.jpg', 'analise-benevides-h7NIaoJ62d8-unsplash.jpg', 'andrea-rico-yHhtT7-A1Xg-unsplash.jpg', 'ant-rozetsky-BTG1pMOVx68-unsplash.jpg', 'apostolos-vamvouras-cf2meVlE8mw-unsplash.jpg', 'arvydas-venckus-3juBHUq07Rw-unsplash.jpg', 'bambi-corro-fTPUpUhiBSc-unsplash.jpg', 'barbora-polednova-dY7Q-sl77L4-unsplash.jpg', 'ben-den-engelsen-2KrJ4ryty2g-unsplash.jpg', 'ben-den-engelsen-7TU5JJAwPyU-unsplash.jpg', 'ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg', 'ben-den-engelsen-ZEjjjYnMYbo-unsplash.jpg', 'ben-den-engelsen-nqEJ548Hqjs-unsplash.jpg', 'ben-den-engelsen-zLpwxTHN7DM-unsplash.jpg', 'ben-parker-OhKElOkQ3RE-unsplash.jpg', 'boston-public-library-KyyrrRkSVQU-unsplash.jpg', 'brooke-cagle-kvKSL7B6eTo-unsplash.jpg', 'can-yilmaz-FQrwX0c6ag0-unsplash.jpg', 'caroline-hernandez-No25c8T0dz4-unsplash.jpg', 'cdc-SAwxJ8PHY3Q-unsplash.jpg', 'cesar-rincon-XHVpWcr5grQ-unsplash.jpg', 'christian-bowen-V6brG7VFDf0-unsplash.jpg', 'christin-hume-ntCL_-kaFbo-unsplash.jpg', 'christopher-campbell-rDEOVtE7vOs-unsplash.jpg', 'clayton-cardinalli-mMnU-UMmXok-unsplash.jpg', 'collins-lesulie-oPyM5T6a_P0-unsplash.jpg', 'david-todd-mccarty-VGLImIsgs9A-unsplash.jpg', 'davide-ragusa-u7K3hv9V7oU-unsplash.jpg', 'debby-ledet-3X5XW24EeJs-unsplash.jpg', 'debby-ledet-UC0Z9_ZECgA-unsplash.jpg', 'donn-gabriel-baleva-U-Z4P2H3KFE-unsplash.jpg', 'emile-guillemot-kkJDwrsG3R8-unsplash.jpg', 'eric-weber-nQOQVJW7EY8-unsplash.jpg', 'europeana-TdWb9zMFLzY-unsplash.jpg', 'febrian-zakaria-K9lxUQdalbc-unsplash.jpg', 'foto-sushi-6anudmpILw4-unsplash.jpg', 'freestocks-RQ2dvd2FUV4-unsplash.jpg', 'gabriel-salas-YnENabLdEKY-unsplash.jpg', 'gabriel-silverio-u3WmDyKGsrY-unsplash.jpg', 'gwendal-cottin-hjh44mbwCyg-unsplash.jpg', 'harishan-kobalasingam-8PMvB4VyVXA-unsplash.jpg', 'hatham-PY2lJbqsJzU-unsplash.jpg', 'icons8-team-y2T5hT7pWx4-unsplash.jpg', 'immo-wegmann-rReG42Hkqo4-unsplash.jpg', 'inlytics-linkedin-analytics-tool-ZZAsbUp-7n8-unsplash.jpg', 'irina-SNUvxm6vM2I-unsplash.jpg', 'jaku-arias-ic8U8a9XBzc-unsplash.jpg', 'jennifer-bedoya-UtAvNgwSwX4-unsplash.jpg', 'jonathan-borba-DUrU_bZV8So-unsplash.jpg', 'jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg', 'keem-ibarra-hbDjR7iWdJs-unsplash.jpg', 'kimson-doan-HD8KlyWRYYM-unsplash.jpg', 'kirill-balobanov-2rIs8OH5ng0-unsplash.jpg', 'kreated-media-0fN7Fxv1eWA-unsplash.jpg', 'liliia-beda-_z3ze-sfZ9M-unsplash.jpg', 'loly-galina-PPEptzBa44Q-unsplash.jpg', 'luca-iaconelli-D5kamMnPoKk-unsplash.jpg', 'luis-villasmil-WW1PtrGseBc-unsplash.jpg', 'luis-villasmil-hh3ViD0r0Rc-unsplash.jpg', 'matteo-vistocco-_L9e5PFtdbM-unsplash.jpg', 'mcgill-library-80i9GrAEDXo-unsplash.jpg', 'michael-dam-mEZ3PoFGs_k-unsplash.jpg', 'midas-hofstra-a6PMA5JEmWE-unsplash.jpg', 'minh-pham-5yENNRbbat4-unsplash.jpg', 'nathan-dumlao-4_mJ1TbMK8A-unsplash.jpg', 'oladimeji-odunsi-n5aE6hOY6do-unsplash.jpg', 'oladimeji-odunsi-tUUmR82pq68-unsplash.jpg', 'omid-armin-OkTLqCac3uE-unsplash.jpg', 'omid-armin-wH3DddKXPoQ-unsplash.jpg', 'oscar-obians-QYN7N4sVC4c-unsplash.jpg', 'petr-ovralov-qQ01rvKkE0w-unsplash.jpg', 'prince-akachi-RcqKOjX0ZHE-unsplash.jpg', 'princess-4glIyBjf2Gk-unsplash.jpg', 'rafael-silva-yA2NU-Z00aY-unsplash.jpg', 'raul-angel-x8Ac6jee_3s-unsplash.jpg', 'rita-malcok-oOhTXx5mJqI-unsplash.jpg', 'rita-malcok-vb0XtMgY3Rs-unsplash.jpg', 'sarah-brown-tTdC88_6a_I-unsplash.jpg', 'sean-jRIstMZXUlA-unsplash.jpg', 'sergio-de-paula-c_GmwfHBDzk-unsplash.jpg', 'sharon-mccutcheon-tkkAzITbfP8-unsplash.jpg', 'susanna-marsiglia-CZwXvMhFLk8-unsplash.jpg', 'tamara-bellis-A3Gd2b-98_g-unsplash.jpg', 'tamara-bellis-oj2nLF70ya4-unsplash.jpg', 'timothy-barlin-v6CsrFKOxY4-unsplash.jpg', 'warren-wong-VVEwJJRRHgk-unsplash.jpg', 'yogendra-singh-4Qo9dgDaPMo-unsplash.jpg', 'zekeriya-sen-3kEtWZuVCm0-unsplash.jpg', 'zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg'];

// create 100 users
const insertUsers = async () => {
  for (let i = 0; i < 100; i++) {
    let randomUserName = faker.internet.userName();
    let randomCountry = (Math.random() <= .7) ? 'the United States' : faker.address.country();
    let randomAvatar = s3AvatarDomain + randomAvatars[i];
    let params = [randomUserName, randomCountry, randomAvatar];
    let queryStr = 'INSERT INTO users(user_name, country, avatar) VALUES (?, ?, ?)';
    await db.query(queryStr, params);
  }
};

insertUsers();

let s3domain = 'https://hr-fec.s3.us-east-2.amazonaws.com/random-product-photos/random-product-photos/';

let s3Urls = ['alejandro-luengo--c1-ZT-hLzM-unsplash.jpg', 'alexander-andrews-lMpoDibrEmY-unsplash.jpg', 'andrew-mantarro-swrVjn4M-_o-unsplash.jpg', 'angelina-litvin-YL7Y9uZ5O98-unsplash.jpg', 'avery-evans-RkCvkHgfiqc-unsplash.jpg', 'charisse-kenion-dah-jZWgzx8-unsplash.jpg', 'curology-DGH1u80sZik-unsplash.jpg', 'edi-libedinsky-AS49431lESE-unsplash.jpg', 'fabian-blank-pElSkGRA2NU-unsplash.jpg', 'jeremy-alford-68_PLKkF_ww-unsplash.jpg', 'laura-chouette--qNr1_q7k6Y-unsplash.jpg', 'laura-chouette-b0AfTrYs9_M-unsplash.jpg', 'laura-chouette-jLl2yh2qS9w-unsplash.jpg', 'laura-chouette-qTgtjpkM7r4-unsplash.jpg', 'lum3n--RBuQ2PK_L8-unsplash.jpg', 'mike-dorner-sf_1ZDA1YFw-unsplash.jpg', 'namroud-gorguis-FZWivbri0Xk-unsplash.jpg', 'priscilla-du-preez-5NQkmZyT03s-unsplash.jpg', 'rachmaddian-shotz-XhIsZKX3Jjc-unsplash.jpg', 'sebastian-dc-YoVP5FYUXIA-unsplash.jpg'];


// Rougly mimics average distribution of Amazon reviews
let one = new Array(14).fill(1);
let two = new Array(6).fill(2);
let three = new Array(8).fill(3);
let four = new Array(18).fill(4);
let five = new Array(54).fill(5);
const merged = [...one, ...two, ...three, ...four, ...five];

// create 0-20 reviews per product
const insertReviews = async () => {
  // for each product_id
  for (let i = 1; i <= 100; i++) {
    // create a random number of reviews for each product
    let numberOfReviews = Math.floor(Math.random() * 10);
    for (let j = 0; j < numberOfReviews; j++) {
      let product_id = i;
      let user_id = Math.floor(Math.random() * 100) + 1;
      let overall_rating = merged[Math.floor(Math.random() * 100)];
      let review_date = faker.date.past(5, '2020-11-13');;
      let headline = faker.random.words(Math.floor(Math.random() * 4) + 2);
      let full_text = faker.random.words(Math.floor(Math.random() * (45 - 22) ) + 22);
      let helpful = Math.floor(Math.random() * 40);
      let verified_purchase = (Math.random() <= 0.7) ? 1 : 0;
      let product_photo = null;
      if (Math.random() >= 0.75) {
        product_photo = s3domain + s3Urls[Math.floor(Math.random() * 20)];
      }

      let params = [product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo];

      let queryStr = 'INSERT INTO reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

      await db.query(queryStr, params);
    }
  }
};

insertReviews();


console.log('Finished seeding database. You may now exit this process (Command + C)');
