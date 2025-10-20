// Check product ID from meta tag instead of URL
(function() {
    var productMeta = document.querySelector('meta[property="product:retailer_item_id"]');
    if (!productMeta || productMeta.content !== '1c9c1dac-af2e-4481-897f-3c65b2538ec7') {
        return; // Exit if not the target product
    }

    function updateProductCounts() {
        const productCounts = document.querySelectorAll('.product-count .lang');
        
        productCounts.forEach(element => {
            if (element.dataset.updated === 'true') {
                return;
            }
            
            const staticNumber = 8427;
            const newTextTemplate = "تم شراؤه أكثر من {number} مرة";
            const final_text = newTextTemplate.replace('{number}', staticNumber.toLocaleString('en-US'));
            element.textContent = final_text;
            element.dataset.updated = 'true';
            element.style.visibility = 'visible';
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateProductCounts);
    } else {
        updateProductCounts();
    }
    
    // Throttle function to limit execution frequency
    let throttleTimer = null;
    function throttle(callback, delay) {
        if (throttleTimer) return;
        throttleTimer = setTimeout(function() {
            callback();
            throttleTimer = null;
        }, delay);
    }
    
    const observer = new MutationObserver(function(mutations) {
        let shouldUpdate = false;
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                // Check if any added nodes contain our target elements
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.classList && node.classList.contains('product-count') ||
                            node.querySelector && node.querySelector('.product-count')) {
                            shouldUpdate = true;
                        }
                    }
                });
            }
        });
        
        if (shouldUpdate) {
            throttle(updateProductCounts, 100); // Only run max once per 100ms
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    var productMeta = document.querySelector('meta[property="product:retailer_item_id"]');
    if (!productMeta || productMeta.content !== '1c9c1dac-af2e-4481-897f-3c65b2538ec7') {
        return;
    }

    const newRatingCount = 327;
    const totalRatingCountElements = document.querySelectorAll('.product-card-rating-count');
    
    totalRatingCountElements.forEach(element => {
        element.textContent = `(${newRatingCount})`;
    });

    const fiveStarCountElement = document.querySelector('.rating_count_5');
    
    if (fiveStarCountElement) {
        fiveStarCountElement.textContent = newRatingCount;
    }

    const ldJsonScript = document.querySelector('script[type="application/ld+json"]');
    
    if (ldJsonScript) {
        try {
            let structuredData = JSON.parse(ldJsonScript.innerHTML);

            if (structuredData.aggregateRating) {
                structuredData.aggregateRating.reviewCount = newRatingCount.toString();
            }

            ldJsonScript.innerHTML = JSON.stringify(structuredData, null, 2);

        } catch (error) {
            console.error("Error updating JSON-LD structured data:", error);
        }
    }
    
    console.log("Rating counts successfully updated to 327.");
});

document.addEventListener('DOMContentLoaded', () => {
    var productMeta = document.querySelector('meta[property="product:retailer_item_id"]');
    if (!productMeta || productMeta.content !== '1c9c1dac-af2e-4481-897f-3c65b2538ec7') {
        return;
    }

    const newReviews = [
        {
            author: 'ناصر علي البخيت',
            comment: 'مناديل ناعمه وقويه ومتماسكه',
            rating: 5
        },
        {
            author: 'محمد المحمدي',
            comment: 'رائع رائع من اجمل المناديل والسعر خيال والجوده رهيبه',
            rating: 5
        },
        {
            author: 'Nada Alshehri',
            comment: 'رائع منتج رائع واتمنى ما تتغير جودته ولا سعره',
            rating: 5
        },
        {
            author: 'معاذ الحربي',
            comment: 'ممتاز انصح به',
            rating: 5
        },
        {
            author: 'احمد الشمري',
            comment: 'افضل منتج تعاملت معاه كجودة وسرعة توصيل شكرا لكم',
            rating: 5
        },
        {
            author: 'فوزية باغفار',
            comment: 'المناديل ممتازه والكمية ممتازه بدون ريحه وما تسحب اكثر من منديل',
            rating: 5
        },
        {
            author: 'ماجده المولد',
            comment: 'اقتصاديه وناعمة ثالث مره اشتري من عندهم بعتمدها باذن الله على طول وشحن سريع',
            rating: 5
        },
        {
            author: 'مزنه عبدالله',
            comment: 'افضل منديل ممكن تجربه بالسوق والسعر جدا مناسب ويتساهل',
            rating: 5
        },
        {
            author: 'حور المطيري',
            comment: 'تم استلام الطلب',
            rating: 5
        },
        {
            author: 'خالد الحسني',
            comment: 'جوده ممتازه راح اعيد التجربة',
            rating: 5
        },
        {
            author: 'سلوى يوسف',
            comment: 'افضل منديل استخدمته من كل المناديل اتمنى ما تتغير الجودة',
            rating: 5
        },
        {
            author: 'فوزيه ا',
            comment: 'منتج ممتاز وكميه كبيره وسعر مناسب وعدد لمناديل في كل عبوه ٥٠٠ منديل وطريقة فتح سهله لو كان فيه اكثر من ٥ نجوم ما ترددت في زيادتها الله يوفقكم سهلتها علينا',
            rating: 5
        },
        {
            author: 'محمد الديب',
            comment: 'منتجي المفصل ورابع طلب',
            rating: 5
        },
        {
            author: 'لينا الصيخان',
            comment: 'منتج ممتاز ناعم على البشرة',
            rating: 5
        },
        {
            author: 'عبدالله هادي',
            comment: 'منتج جميل جدا ويستحق الشراء .. خذ وانت مغمض مناديل جودة وناعمه ..طلبت اكثر من ٣ مرات .. وباخذ اكثر فيما بعد ..شكرا لكم',
            rating: 5
        },
        {
            author: 'هدى القبيسي',
            comment: 'سميكه وما تتفتت وناعمه عجبتني',
            rating: 5
        },
        {
            author: 'عبدالله الفايز',
            comment: 'ناعمه جدا',
            rating: 5
        },
        {
            author: 'خالد اليامي',
            comment: 'استجابة سريعة, أسعار مناسبة, منتجات ذات جودة عالية, وقت سريع لتحضير الطلب, خدمات ما بعد البيع رائعة',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'عرض روعة واقسم بالله دايم عميل لديهم',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'افضل مناديل مرت علي صراحه وهذي المره الخامسه او السادسه اطلبها واعتمدتها علطول انشاءالله',
            rating: 5
        },
        {
            author: 'ابراهيم سليمان',
            comment: 'والله ماهي اول مره اخذ من عندهم الجوده هي اساس تعاملي معهم وطلبي هذا اسرع توصيل خلال يوم عمل وهذي تحسب لهم اضافة الى جودة وسماكة وتنوع المناديل انصح وبشدة شكرا النخبه من كل قلبي',
            rating: 5
        },
        {
            author: 'مريم',
            comment: 'رائع جدا جد ا جدا جدا',
            rating: 5
        },
        {
            author: 'رسيل',
            comment: 'المناديل جودتها عاليه وممتازة هذي مو اول مره اطلب معتمدتهم وغير كذا سريعين في التوصيل اشكرهم وبالتوفيق لهم',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'مناديل ممتازه وانا لي فتره طويله اطلب منكم اقترح انكم بعد كل خمس طلبيات تقدمون هديه للعميل وشكرًا لكم',
            rating: 5
        },
        {
            author: 'ام معاذ',
            comment: 'المناديل جيده جدا بعد ما جبتها للدوام صار زميلاتي بعد يطلبونها والتوصيل رائع و سريع الله يجزأهم خير',
            rating: 5
        },
        {
            author: 'يحيى هوساوي',
            comment: 'تم التعامل مره واحده من بعدها تم التعامل عده مرات نوعيه متاز',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'تجننننن مررره وناعمه ماندمت اني طلبتها ومو اخر مره',
            rating: 5
        },
        {
            author: 'Abdulaziz Alanazi',
            comment: 'من افضل الشركات بالتعامل والتوصيل والسرعة والجودة والسعر',
            rating: 5
        },
        {
            author: 'خالد السهلي الحربي',
            comment: 'أفضل مناديل اعتمدناه ممتاز مايتقطع وسماكته ممتازه جدا👍🏼',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'مناديل ممتازة ومتينة تتحمل الرطوبة بس ليت الي يشري منكم مرة ثانية تعطونه كود خصم',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'أنصحكم والله ثم والله تأخذون منهم منتجات قمه في الروعه هذا الشهر الثالث أتعامل معهم شهريا آخذ وتوصلني لباب البيت',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'للأمانه ما اشتري مناديل من غيرهم',
            rating: 5
        },
        {
            author: 'محمد علي الحربي',
            comment: 'ماشاءالله جودة المنتج ممتازه نعومه ومتانه المرة الاولى اشتريت بكجين وهذي المره الثانية اشتري بكجين نفس الشي 👍🏻🌹',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'من افضل المناديل الي استخدمتها جودة وسعر وسرعة في التوصيل اشكر القائمين على مناديل النخبة لحرصهم على جودة المنتج',
            rating: 5
        },
        {
            author: 'لمياء محمد',
            comment: 'شكراً مناديل النخبه جوده ممتازه وسعر مناسب كنسلت مناديلي السابقه وبستمر على النخبه بس 💙بس حافظوا على هالجوده والسعر 😍',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'مناديل ناعمة وسميكة، اعجبني بياض اللون، ماتذوب مع المويه ولا تلصق باليد.. اتمنى يستمرون على هذه الجودة والاسعار المناسبة',
            rating: 5
        },
        {
            author: 'اسعد حباب',
            comment: 'المناديل جودتها عالية وومافيها ريحة مزعجة .. بيستاهل قيمته',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'ممتازة ماشالله قوة ومتانة ثالث مرة أطلب',
            rating: 5
        },
        {
            author: 'شعاع الحربي',
            comment: 'المناديل ماعليها كلام تهبل هذي خامس مره اطلبها',
            rating: 5
        },
        {
            author: 'علي',
            comment: 'بحثت وكل فترة ابحث عن جودة مناديل وسعر ولم أجد أفضل من هذه المناديل مستحيل تجد جودة وسعر أفضل وأراهن على ذلك، وخدمة العملاء جاهزين للرد على أي استفسار بوقتي قياسي وأي شي تطلبه ينفذ العملاءعندهم رقم 1',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'الصراحه كنت اخذ من شركات ثانيه بس من طحت على النخبه ماعاد اخذ الا منهم صراحه جوده وسعر حلو وتوصيل سريع اهنيهم والله',
            rating: 5
        },
        {
            author: 'خالد',
            comment: 'تعاملت مع منتجات المناديل من شركات عدة لكن مثل منتجاتكم وجودتها وقوة سماكتها ونعومة ملمسها ليس لكم مثيل، وكذالك سرعة التوصيل',
            rating: 5
        },
        {
            author: 'سميه الشريف',
            comment: 'للامانه اقوى وانعم مناديل جربتها الى الان حرفيا ٣ طبقات وكميه مناسبة',
            rating: 5
        },
        {
            author: 'عبدالمجيد الفاضل',
            comment: 'شي فاخر من الاخر',
            rating: 5
        },
        {
            author: 'رضا لبان',
            comment: 'ممتازين وموثوقين وجوده وسعر وسريع التوصيل اينماكنت',
            rating: 5
        },
        {
            author: 'ام عبدالرحمن',
            comment: 'مررررره تجنن وبطله وانصح الكل ياخذ منها ومعتمدتها بكل شي مناديل قويه ناعمه متينه خامه ممتازه جداااااا',
            rating: 5
        },
        {
            author: 'ماجد المطرفي',
            comment: 'المنتج اللي يجمع السعر المناسب والجودة العالية والتوصيل السريع والله والله انها من اجود انواع المناديل يستاهلون ١٠ نجوم',
            rating: 5
        },
        {
            author: 'جوج القحطاني',
            comment: 'اجججحجححمل مناديل مرت علي وصرت معاد استغني عنها او استبدله ابدا',
            rating: 5
        },
        {
            author: 'عميل مخفي',
            comment: 'صراحه منتج رهيب وهذي ثاني مره اطلبه وماندمت ابدا حقيقي يعطيكم العافيه',
            rating: 5
        },
        {
            author: 'منيره عبدالعزيز',
            comment: 'ممتاز يتميز بالسماكة سهل الفتح والسحب',
            rating: 5
        }
    ];

    function generateRealisticDate() {
        const now = new Date();
        const pastTimestamp = now.getTime() - (Math.random() * 90 + 1) * 24 * 60 * 60 * 1000;
        const pastDate = new Date(pastTimestamp);

        const year = pastDate.getFullYear();
        const month = String(pastDate.getMonth() + 1).padStart(2, '0');
        const day = String(pastDate.getDate()).padStart(2, '0');
        const hours = String(pastDate.getHours()).padStart(2, '0');
        const minutes = String(pastDate.getMinutes()).padStart(2, '0');
        const seconds = String(pastDate.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    function createReviewElement(review) {
        const card = document.createElement('div');
        card.classList.add('card', 'card-review', 'mt-2', 'mb-4', 'bg-transparent');

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const topFlexContainer = document.createElement('div');
        topFlexContainer.className = 'd-flex';

        const userIcon = document.createElement('span');
        userIcon.className = 'icon-account_circle';
        userIcon.textContent = review.author.substring(0, 1);
        const hiddenNameSpan = document.createElement('span');
        hiddenNameSpan.className = 'd-none';
        hiddenNameSpan.textContent = review.author;
        userIcon.appendChild(hiddenNameSpan);

        const nameAndRatingContainer = document.createElement('div');
        nameAndRatingContainer.className = 'card-name';

        const authorName = document.createElement('p');
        authorName.className = 'card-name-customer';
        authorName.textContent = review.author;

        const ratingFlexContainer = document.createElement('div');
        ratingFlexContainer.classList.add('d-flex', 'card-rate-comment');
        
        const starsDiv = document.createElement('div');
        starsDiv.classList.add('d-inline-flex', 'product-card-rating');
        starsDiv.setAttribute('data-rating', review.rating);

        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'icon-star1';
            starsDiv.appendChild(star);
        }

        ratingFlexContainer.appendChild(starsDiv);
        nameAndRatingContainer.appendChild(authorName);
        nameAndRatingContainer.appendChild(ratingFlexContainer);

        const reviewDate = document.createElement('div');
        reviewDate.classList.add('card-date', 'user-review-date');
        reviewDate.setAttribute('data-time-ago-date', generateRealisticDate());

        const commentText = document.createElement('div');
        commentText.classList.add('card-paragraph', 'text-justify', 'mt-2', 'user-review-text');
        commentText.textContent = review.comment;

        topFlexContainer.appendChild(userIcon);
        topFlexContainer.appendChild(nameAndRatingContainer);
        topFlexContainer.appendChild(reviewDate);

        cardBody.appendChild(topFlexContainer);
        cardBody.appendChild(commentText);

        card.appendChild(cardBody);

        return card;
    }

    const commentSection = document.querySelector('.comment-section');

    if (commentSection) {
        newReviews.forEach(reviewData => {
            const reviewElement = createReviewElement(reviewData);
            commentSection.appendChild(reviewElement);
        });

        console.log(`${newReviews.length} new reviews have been successfully added to the page.`);
        
    } else {
        console.error('Error: The review container (.comment-section) was not found on the page.');
    }
});