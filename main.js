new Vue({
    el: '#app',
    data: {
        selectedTag: '',
        selectedArticleByTag: null,
        articles: [
            {
                title: 'Let’s Get Solution for Building Construction Work',
                content: {
                    image: 'img/BlogDetailsArt1.svg',
                    date: '26 December, 2022 ',
                    category: 'Interior / Home / Decore',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>
                            Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                    sloganImg: 'img/BlogDetailsSlogan.svg',
                    secondTitle: 'Design sprints are great',
                    secondText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                    secondImage: 'img/BlogDetailsArt2.svg',
                    thirdText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`
                },
                tags: ['Kitchen', 'Kitchen planning']
            },
            {
                title: "Best For Any Office & Business Interior Solution",
                content: 'Content of Article 2',
                tags: ['Bedroom', 'Building']
            },
            {
                title: "Low Cost Latest Invented Interior Designing Ideas",
                content: 'Content of Article 3',
                tags: ['Architecture']
            },
            {
                title: 'Let’s Get Solution for Building Construction Work',
                content: 'Content of Article 4',
                tags: ['Building']
            },
            {
                title: "Best For Any Office & Business Interior Solution",
                content: 'Content of Article 5',
                tags: ['Building', 'Architecture']
            },
            {
                title: "Low Cost Latest Invented Interior Designing Ideas",
                content: 'Content of Article 6',
                tags: ['Architecture', 'Kitchen']
            }
        ],
        allTags: []
    },
    computed: {
        filteredArticles() {

            if (this.selectedTag === '') {
                return this.articles;
            } else {
                return this.articles.filter(article => article.tags.includes(this.selectedTag));
            }
        }
    },
    methods: {
        selectTag(tag) {
            this.selectedTag = tag;
            this.selectedArticleByTag = this.articles.find(article => article.tags.includes(tag));
        }
    },
    created() {

        this.allTags = [];
        this.articles.forEach(article => {
            article.tags.forEach(tag => {
                if (!this.allTags.includes(tag)) {
                    this.allTags.push(tag);
                }
            });
        });

        if (this.allTags.length > 0) {
            this.selectedTag = this.allTags[0];
            this.selectedArticleByTag = this.articles.find(article => article.tags.includes(this.selectedTag));
        }
    }
});
