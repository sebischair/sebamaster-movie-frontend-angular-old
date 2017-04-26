'use strict';

let data = [
    {
        "_id": "5900efe4e70933bda484e9f1",
        "title": "Netropic",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "NC-17",
        "year": 2016,
        "synopsis": "Ea incididunt elit sint incididunt fugiat ad. Ea qui mollit irure ea minim enim ex incididunt ex aliquip consequat consequat. Laborum sit culpa nostrud enim mollit sint aliqua officia minim. Irure incididunt et adipisicing ipsum dolor fugiat eiusmod dolore voluptate consectetur sit fugiat reprehenderit consequat. Commodo consectetur est esse reprehenderit proident est quis irure.\r\nExercitation nisi culpa anim dolore in cillum magna adipisicing amet magna nulla nisi magna aliquip. Aute eiusmod aliquip incididunt velit magna tempor tempor nisi cupidatat veniam consectetur. Cillum adipisicing commodo commodo qui cupidatat aute. Velit reprehenderit est officia adipisicing aute cillum consequat nulla minim sint. Cupidatat nostrud cillum ad ut amet amet do incididunt.\r\n"
    },
    {
        "_id": "5900efe4505ce015f843b8fd",
        "title": "Omnigog",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "R",
        "year": 2017,
        "synopsis": "Proident veniam id duis exercitation laboris commodo elit laboris esse elit irure tempor. Veniam do officia id duis dolore velit. Incididunt proident officia nisi mollit dolor dolor est qui aliquip cillum commodo. Anim consectetur nisi elit sunt ex aliqua aute magna fugiat eu cupidatat laborum eu. Qui commodo et cupidatat eiusmod culpa non. Consectetur do dolor mollit nulla minim elit proident et dolore tempor.\r\nConsectetur est dolore duis est velit ullamco commodo duis. Occaecat laboris proident incididunt labore ullamco cupidatat do commodo culpa incididunt ullamco eu aute non. Laborum occaecat aute incididunt aute quis non et labore culpa minim aute ex officia occaecat. Elit aliqua mollit voluptate est exercitation nulla.\r\n"
    },
    {
        "_id": "5900efe40aaa7b9d7b1f293b",
        "title": "Insource",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "PG",
        "year": 2014,
        "synopsis": "Laborum nisi id adipisicing aute enim dolor quis dolor id qui culpa aute esse. Officia proident aliqua qui incididunt consequat occaecat magna voluptate esse occaecat incididunt reprehenderit. Aliqua proident est non non nostrud. Ipsum aute officia exercitation esse aliquip minim voluptate velit officia mollit qui. Cillum culpa dolor nulla aliquip veniam do est exercitation aute anim id laboris est. Duis duis occaecat proident ipsum Lorem excepteur ullamco sit ea et.\r\nDolor pariatur elit velit reprehenderit. Labore eiusmod ex dolor laboris enim Lorem cupidatat sint minim aliqua. Dolor ullamco sint cupidatat culpa eu ex. Commodo ut nostrud ullamco dolore non. Excepteur qui reprehenderit irure laboris.\r\n"
    },
    {
        "_id": "5900efe45a30d3833aa16bf9",
        "title": "Combogene",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "PG-13",
        "year": 2014,
        "synopsis": "Voluptate est in et elit labore ut amet est minim. Reprehenderit aute aliqua aliqua et. Voluptate Lorem incididunt commodo excepteur ad occaecat quis qui officia id. Nisi culpa laboris voluptate qui ea tempor irure minim.\r\nOccaecat do sunt laborum ea amet. Minim laborum aliquip Lorem cupidatat magna magna. Proident aliqua laboris anim quis sunt. Occaecat proident officia Lorem anim duis nisi ut irure excepteur nisi ullamco. Tempor aute laboris commodo cillum.\r\n"
    },
    {
        "_id": "5900efe497652e46fdd2a751",
        "title": "Jamnation",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "PG-13",
        "year": 2016,
        "synopsis": "Ea adipisicing culpa culpa fugiat aliquip amet minim sit Lorem velit elit deserunt sit. Amet cillum officia qui enim fugiat quis deserunt do eu do. Magna veniam labore tempor ullamco ad ipsum nostrud laboris excepteur voluptate commodo. Magna esse cupidatat deserunt reprehenderit cillum in mollit pariatur cupidatat mollit magna aute ad. Fugiat esse fugiat est velit fugiat et velit qui. Tempor Lorem est ullamco nostrud laboris est dolor laborum veniam. Eiusmod consectetur tempor ea in consectetur commodo magna id laboris fugiat consequat amet nostrud.\r\nAmet quis in irure aute. Ex cupidatat dolor velit deserunt labore occaecat velit sit non anim voluptate esse laboris. Commodo dolore ea fugiat esse cillum eiusmod laboris id. Sit cupidatat nisi veniam laborum enim.\r\n"
    },
    {
        "_id": "5900efe4053c0dc100dcd6aa",
        "title": "Conferia",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "R",
        "year": 2015,
        "synopsis": "Do mollit quis id minim ea velit sit proident. Lorem officia sint ad officia mollit duis fugiat ea tempor culpa esse commodo. Nulla eiusmod irure occaecat id tempor est sit aute officia dolor dolore nisi occaecat. Ipsum ipsum duis in exercitation fugiat aliquip cillum voluptate non incididunt excepteur. Cupidatat et aliquip magna esse voluptate fugiat labore mollit quis fugiat incididunt. Minim voluptate et voluptate velit dolor eiusmod pariatur et eiusmod. Ex veniam id ad consectetur ad.\r\nProident commodo aute aliquip est elit dolor sint proident quis reprehenderit. Fugiat deserunt sint nisi pariatur. Aliquip ad exercitation tempor adipisicing est officia eu elit. Officia aliqua anim elit laboris ipsum sint et qui.\r\n"
    },
    {
        "_id": "5900efe4e9d5ddab10b20f80",
        "title": "Geofarm",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "G",
        "year": 2014,
        "synopsis": "Reprehenderit esse proident occaecat aliqua ut anim cupidatat dolor fugiat qui magna velit minim deserunt. Incididunt laborum deserunt dolore laborum veniam ad. Aliquip commodo exercitation esse officia duis laborum ut exercitation eiusmod.\r\nSint veniam aliqua dolore anim adipisicing consectetur est magna. Duis aute elit laborum cillum eu. Nulla velit excepteur anim cupidatat exercitation duis excepteur est exercitation ea ex occaecat quis.\r\n"
    },
    {
        "_id": "5900efe496ff847931cd5aa5",
        "title": "Rubadub",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "NC-17",
        "year": 2014,
        "synopsis": "Dolor sunt proident est aliqua do ut elit exercitation. Dolor magna dolor anim elit sunt. Minim laboris sit officia ipsum occaecat laborum labore id culpa sit nisi qui ullamco excepteur.\r\nEu laborum veniam eu culpa sint qui in aliqua. Est nisi adipisicing dolor commodo. Id consectetur ut commodo non ut eiusmod aliquip incididunt nisi.\r\n"
    },
    {
        "_id": "5900efe4df2cff576abf48a4",
        "title": "Eternis",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "PG",
        "year": 2013,
        "synopsis": "Officia ea duis veniam incididunt id cillum minim ea qui officia culpa ullamco et incididunt. Enim voluptate incididunt veniam aute. Non eiusmod anim voluptate proident. Eiusmod nulla excepteur nulla nisi commodo. Est nostrud fugiat elit eu cupidatat fugiat velit do amet. Dolor in ullamco aliquip et ea Lorem ipsum sunt ea aliquip sunt ullamco.\r\nLorem do dolore aliquip et ad ipsum est. Labore ut dolore non velit ea ad duis eiusmod amet minim laborum qui incididunt. Eiusmod cillum non velit consequat voluptate reprehenderit tempor nulla.\r\n"
    },
    {
        "_id": "5900efe48909165d77eb79c5",
        "title": "Interloo",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "R",
        "year": 2013,
        "synopsis": "Cupidatat veniam aute aliqua quis id mollit proident nulla voluptate in. Nulla anim esse labore ex nisi nulla ut voluptate. Excepteur ex aute nostrud nulla nostrud excepteur mollit. Irure ea est enim laborum reprehenderit occaecat cupidatat eiusmod sunt sunt aliqua veniam dolor.\r\nVeniam cillum et aliqua tempor eu ullamco aliquip aliquip adipisicing officia. Laborum est ex esse eu. Mollit aliquip aliqua cupidatat amet do. Dolor consectetur mollit irure nulla cillum dolore aliquip dolore occaecat commodo do incididunt. Ullamco officia exercitation pariatur aliquip Lorem excepteur sit excepteur consectetur velit fugiat deserunt. Esse excepteur eiusmod est irure qui veniam ex reprehenderit enim. Excepteur cillum dolore Lorem cupidatat veniam.\r\n"
    },
    {
        "_id": "5900efe4a7c59fc5d57c5f5c",
        "title": "Entogrok",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "NC-17",
        "year": 2017,
        "synopsis": "Dolore eu sit do elit ex sunt. Adipisicing sunt cupidatat ea esse sit nulla qui nisi do pariatur consectetur voluptate sint. Consequat esse tempor amet non culpa tempor. Dolore sint non deserunt laborum voluptate nisi eu aliquip sunt. Do labore cupidatat in sint anim voluptate ex sunt ea et sunt.\r\nPariatur aute non proident sit ad pariatur fugiat cupidatat officia elit elit do id aute. Ipsum amet duis ut ex aliqua id officia. In mollit minim sit eu laboris cillum Lorem anim. Dolor non occaecat duis exercitation enim laboris eiusmod ipsum occaecat quis sunt do.\r\n"
    },
    {
        "_id": "5900efe4aecf5fe62b6ad813",
        "title": "Geoform",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "NC-17",
        "year": 2013,
        "synopsis": "Sit ex in dolor enim ex Lorem aliquip. Nostrud eiusmod aliqua enim veniam. Quis sint consequat ullamco exercitation minim labore anim. Sit cupidatat officia occaecat ex. Nulla sunt proident tempor magna amet consectetur in occaecat consequat.\r\nQui sint sint deserunt veniam officia. Lorem pariatur nisi sunt sint eiusmod sit cupidatat incididunt voluptate veniam ea veniam. Qui eiusmod minim ex anim tempor officia aute. Tempor dolore aliquip pariatur laborum et incididunt enim laborum excepteur amet. Occaecat quis dolor nulla Lorem ipsum ipsum.\r\n"
    },
    {
        "_id": "5900efe4976f604081a8fe80",
        "title": "Momentia",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "G",
        "year": 2017,
        "synopsis": "Ullamco ipsum ea incididunt occaecat ut dolor ex ullamco fugiat. Cupidatat sint in quis eu laboris anim. Nisi et velit eu tempor consectetur ex sint aliqua anim eu esse sunt consequat. Ea magna consequat esse labore enim labore duis et reprehenderit aute elit fugiat commodo laborum. Proident culpa sunt est veniam cillum commodo labore cupidatat aliqua fugiat culpa. Lorem sunt proident nostrud do ad exercitation ipsum laborum mollit. Esse enim ipsum voluptate nostrud et quis elit duis adipisicing ullamco anim ut fugiat.\r\nQuis occaecat laborum deserunt ea irure esse. Voluptate magna irure sunt cillum anim anim velit officia esse. Mollit dolore quis ea adipisicing ipsum incididunt fugiat excepteur nisi. Et deserunt ullamco laboris proident fugiat laboris cupidatat magna ut nulla officia reprehenderit culpa. Dolor irure incididunt non magna laborum nulla consectetur ut dolore.\r\n"
    },
    {
        "_id": "5900efe47269af50a3112065",
        "title": "Snorus",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "G",
        "year": 2013,
        "synopsis": "Non excepteur non dolore consequat anim. Officia magna ullamco amet id officia mollit magna do enim. Ut dolore non quis dolore cillum culpa culpa. Nisi consectetur aliquip dolore nisi excepteur laboris velit tempor commodo excepteur voluptate enim ex incididunt. Aute ea Lorem irure exercitation excepteur fugiat do eiusmod deserunt.\r\nAliquip laboris irure veniam ullamco ullamco occaecat consequat incididunt et officia tempor. Nisi ullamco in labore proident nulla. Sit deserunt consequat nisi aliqua ea.\r\n"
    },
    {
        "_id": "5900efe4d92efa5802ad063c",
        "title": "Exerta",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "NC-17",
        "year": 2013,
        "synopsis": "Excepteur nulla dolor sit laborum aliqua nostrud aliqua Lorem laboris occaecat laborum esse reprehenderit. Deserunt dolor id eiusmod ut exercitation in. Duis eiusmod ea pariatur occaecat elit pariatur tempor fugiat nisi pariatur id. Enim Lorem ad mollit elit incididunt non exercitation velit velit. Mollit mollit eu minim dolore veniam et ad deserunt ullamco deserunt est laborum fugiat voluptate.\r\nIn nostrud ipsum dolore excepteur proident dolor id commodo. Eiusmod quis adipisicing cupidatat sunt deserunt sint aute. Ut incididunt ut cillum excepteur proident cillum dolor reprehenderit fugiat anim labore eu amet. Duis excepteur culpa adipisicing sunt nulla sit cupidatat est cupidatat elit ullamco qui in. Fugiat nisi reprehenderit culpa ad ut sit voluptate sit ipsum ullamco consectetur ad nostrud. Sint ea fugiat laboris ad officia quis duis non adipisicing non. Occaecat occaecat ea quis occaecat do ad enim sunt aliqua est.\r\n"
    },
    {
        "_id": "5900efe47a82a86f1c428d0b",
        "title": "Recrisys",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "PG-13",
        "year": 2016,
        "synopsis": "Nisi aliqua velit amet laborum qui aliqua mollit ullamco deserunt aliquip incididunt elit consectetur dolor. Do ad duis id velit amet eu veniam et id reprehenderit in. Dolore laboris duis qui mollit.\r\nIpsum amet incididunt eu id cupidatat occaecat in id. Aliquip commodo laboris mollit magna ut reprehenderit. Tempor eu pariatur duis occaecat in esse pariatur consectetur eiusmod et adipisicing eu. Nostrud amet do proident ullamco nisi.\r\n"
    },
    {
        "_id": "5900efe4d689d1213966c500",
        "title": "Ginkogene",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "R",
        "year": 2015,
        "synopsis": "Amet eiusmod occaecat culpa mollit incididunt qui nulla mollit ut minim laboris exercitation. Ipsum qui sit ipsum esse labore id elit in Lorem velit. Mollit quis deserunt culpa nostrud ea ullamco. Eiusmod ad veniam nostrud voluptate quis laborum voluptate esse laboris.\r\nLaboris id cupidatat enim sunt fugiat qui et aute eu quis aliquip. Nisi duis non nostrud et nulla proident aliqua reprehenderit proident. Labore nulla non ullamco nulla amet incididunt magna culpa duis sunt non eiusmod Lorem amet. Dolore excepteur id minim aute duis ad ex ea aute cillum id sint labore sunt. Elit exercitation sunt mollit aute adipisicing et. Ut eiusmod enim mollit elit culpa cillum cupidatat proident nostrud sint.\r\n"
    },
    {
        "_id": "5900efe4c7b4c23686e7b24d",
        "title": "Dogspa",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "PG",
        "year": 2013,
        "synopsis": "Ea do dolore et pariatur quis. Sunt do culpa velit officia voluptate deserunt velit velit incididunt magna. Magna ullamco voluptate labore occaecat ut cupidatat.\r\nPariatur incididunt amet do Lorem ipsum minim et ipsum et est. Aliquip ad aliqua in incididunt. Voluptate labore veniam sint magna Lorem minim elit pariatur in officia voluptate magna. Nostrud elit pariatur magna pariatur ea deserunt duis veniam incididunt laborum consectetur quis.\r\n"
    },
    {
        "_id": "5900efe44cb4f5cfd25369b5",
        "title": "Sybixtex",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "NC-17",
        "year": 2017,
        "synopsis": "Anim qui do velit cupidatat laboris elit veniam in sunt labore ad. Minim do eiusmod veniam ipsum quis ad ex ex dolor excepteur non. Quis mollit ullamco anim eu magna est ut aliquip excepteur officia consectetur id proident. Veniam ex nulla exercitation exercitation exercitation anim. Veniam ex et nisi irure ullamco consectetur ex consectetur quis voluptate est. Elit cupidatat ex excepteur anim tempor magna aute commodo labore in. Dolore irure cupidatat sunt et id ullamco cillum voluptate nostrud culpa irure ex qui in.\r\nEiusmod tempor voluptate ullamco sint excepteur excepteur adipisicing ea culpa minim fugiat nulla esse. Sint elit reprehenderit excepteur fugiat cillum nisi in duis. Deserunt elit ipsum sit Lorem quis id quis labore cupidatat ea irure pariatur. Amet amet ut anim enim exercitation proident. Pariatur veniam non commodo reprehenderit excepteur dolore ipsum ex anim laborum voluptate ea ut mollit. Labore aute occaecat excepteur irure nisi ex. Reprehenderit commodo sunt et sint voluptate labore dolor id aliquip deserunt officia.\r\n"
    },
    {
        "_id": "5900efe458a5b8eb05a5721a",
        "title": "Indexia",
        "picture": "http://placehold.it/32x32",
        "mpaa_rating": "G",
        "year": 2014,
        "synopsis": "Nulla eu veniam pariatur consectetur eu aliquip officia dolor excepteur officia sint nostrud nulla. Voluptate velit amet amet ipsum anim in est aliqua occaecat voluptate magna tempor. Lorem anim nulla enim ad et eiusmod non laborum est voluptate pariatur ullamco. Nostrud magna culpa voluptate in fugiat laborum commodo veniam veniam. Consequat enim consequat adipisicing sunt ipsum ut nulla laborum consequat ullamco. Mollit non sint ut eiusmod consectetur consequat. Aliqua et sit ex consectetur deserunt sint nulla reprehenderit do incididunt sint est ullamco duis.\r\nAnim do veniam fugiat laborum adipisicing consequat sit nulla. Ex veniam magna ex id dolore. Occaecat exercitation reprehenderit aliquip aute non exercitation minim ipsum aute. Proident proident incididunt ipsum amet Lorem magna pariatur sint officia commodo deserunt quis.\r\n"
    }
];

export default class Raw {

    constructor() {

    }

    static get data(){
        return data;
    }

    static asyncMovies() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(Raw.data);
            }, 1000);
        })
    }

    static asyncMovie(id) {

        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                let index = Raw.data.map(x => x['_id']).indexOf(id);

                resolve(Raw.data[index]);

            }, 1000);
        })
    }


}

