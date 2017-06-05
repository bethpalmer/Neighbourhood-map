///////////////////  MODEL  /////////////////////

// places of interest
var poi = [
	{
		area: "lanes",
		areaImages: [
			{img: 'img/north-laine/6049831939_5b979cf9bc_q.jpg', attrib: 'https://www.flickr.com/photos/gareth1953/6049831939'},
			{img: 'img/south-lanes/6070703057_38161fb4d2_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/6071247928'},
			{img: 'img/north-laine/4160169690_9f625d73fa_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/4160169690'},
			{img: 'img/south-lanes/24046937695_0752f8f814_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/24046937695'},
			{img: 'img/north-laine/5781531147_80b1b59b0e_q.jpg', attrib: 'https://www.flickr.com/photos/llamnuds/5781531147'},
			{img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090'}
			],
		infoContent: "<p><small>The charming, quirky and distinctive areas of the lanes are separated into two areas.</small></p>"+
					"<p><small>The North Laine is a central row of streets of small quirky one off stores, niche cafes and bars, stretching north within a grid like layout of residential streets patched with other occasional shops.</small></p>"+
					"<p><small>The lanes, also known as the south lanes, is a tangled web of narrow lanes with small stores and hidden squares. It has a high population of antique jewellery shops, high end fashion retailers, and is buzzing with all kinds of restaurants and bars.</small></p>"+
					"<p><small>Both areas boast a changeable selection of performers and street merchants, creating a curious and enjoyable shopping experience.</small></p>",
		locations: [
			{
				name: "North Laine",
				location: {lat: 50.8249028, lng: -0.1395479},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=North_Laine&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/north-laine/19448793731_6f7f389dcb_q.jpg', attrib: 'https://www.flickr.com/photos/garryknight/19448793731'},
				images: [
					{img: 'img/north-laine/4160169690_9f625d73fa_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/4160169690'},
					{img: 'img/north-laine/5781531147_80b1b59b0e_q.jpg', attrib: 'https://www.flickr.com/photos/llamnuds/5781531147'},
					{img: 'img/north-laine/6049831939_5b979cf9bc_q.jpg', attrib: 'https://www.flickr.com/photos/gareth1953/6049831939'},
					{img: 'img/north-laine/8198189888_b10dd501df_q.jpg', attrib: 'https://www.flickr.com/photos/martinhearn/8198189888'},
					{img: 'img/north-laine/17056158615_4b51e5b75f_q.jpg', attrib: 'https://www.flickr.com/photos/tarquingemstone/17056158615'},
					{img: 'img/north-laine/19448793731_6f7f389dcb_q.jpg', attrib: 'https://www.flickr.com/photos/garryknight/19448793731'}
				]
			},
			{
				name: "The South Lanes",
				location: {lat: 50.8219453, lng: -0.1404023},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=The_Lanes&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090'},
				images: [
					{img: 'img/south-lanes/6070703057_38161fb4d2_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/6071247928'},
					{img: 'img/south-lanes/9837521426_c1404d107b_q.jpg', attrib: 'https://www.flickr.com/photos/stephencleary/9837521426'},
					{img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090'},
					{img: 'img/south-lanes/24046937695_0752f8f814_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/24046937695'},
					{img: 'img/south-lanes/1011055674_973d6fcd17_q.jpg', attrib: 'href="https://www.flickr.com/photos/sarahcord/1011055674'},
					{img: 'img/south-lanes/4685129550_aec1a184ac_q.jpg', attrib: 'https://www.flickr.com/photos/eguidetravel/4685129550'}
				]	
			}
		]
	},
	{
		area: "beach",
		areaImages: [
					{img: 'img/seafront/148674451_adde1f1354_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/148674451'},
					{img: 'img/seafront/217805015_36dcb3a9fa_q.jpg', attrib: 'https://www.flickr.com/photos/mikelo/217805015'},
					{img: 'img/seafront/379606222_7c6a271b2b_q.jpg', attrib: 'https://www.flickr.com/photos/neilhooting/379606222'},
					{img: 'img/seafront/6195951658_34204344cd_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/6195951658'},
					{img: 'img/seafront/14784910924_c5db35e8f6_q.jpg', attrib: 'https://www.flickr.com/photos/garryknight/14784910924'},
					{img: 'img/seafront/14867566034_6af7448638_q.jpg', attrib: 'https://www.flickr.com/photos/bexwalton/14867566034'}
				],
		infoContent: "<div class='row'><div class='col-sm-6'><p><small>The beach in the city or Brighton and Hove ranges from busy and buzzing around the centre, between the 2 piers, to a more restful and spacious vibe at the two ends. The west side, heading up towards hove lagoon brings a distinct family feel with its iconic beach huts, and free range children. The east side of the palace pier hosts a slightly more hip and racey crowd. Situated just south of the gay friendly area of kemptown it leads up towards the infamous nudist beach on the way to the marina.</small></p>"+
					"<p><small>The markers in this section are all based on Phil Lucas's comedy observations of the stereotypes of people you find in different areas of the beach on a sunny day. You can see the main part of his 2017 comedy illustration, which he updates annually, displayed in this information section.</small></p></div>"+
					"<div class='col-sm-6'><img src='img/seafront/where-to-sit.jpg' alt='comedy image of where to sit on Brighton Beach' width=100%><p>Attribution: <a href='https://www.phillucas.com/single-post/2014/10/16/Know-Where-to-Sit-on-Brighton-Beach'>Phil Lucas - Comedian</a></p></div></div>",
		locations: [
			{
				name: "Those who wish to be alone",
				location: {lat: 50.8245914, lng: -0.1700829},
				wiki: '',
				yelp: '',
				mainImage: {img: 'img/seafront/6195951658_34204344cd_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/6195951658'},
				images: [
					{img: 'img/seafront/379606222_7c6a271b2b_q.jpg', attrib: 'https://www.flickr.com/photos/neilhooting/379606222'},
					{img: 'img/seafront/15617931079_0067b2196b_q.jpg', attrib: 'https://www.flickr.com/photos/petercastleton/15617931079'},
					{img: 'img/seafront/6195951658_34204344cd_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/6195951658'},
					{img: 'img/seafront/9465987126_97e55aa297_q.jpg', attrib: 'https://www.flickr.com/photos/fiverlocker/9465987126'},
					{img: 'img/seafront/3131374956_3c3904b7a8_q.jpg', attrib: 'https://www.flickr.com/photos/handolio/3131374956'},
					{img: 'img/seafront/15617931079_0067b2196b_q.jpg', attrib: 'https://www.flickr.com/photos/petercastleton/15617931079'}
				]
			},
			{
				name: "Freelancers,<br>Middle class parents,<br>Families with very large picnics",
				location: {lat: 50.8222356, lng: -0.1541934},
				wiki: '',
				yelp: '',
				mainImage: {img: 'img/seafront/14867566034_6af7448638_q.jpg', attrib: 'https://www.flickr.com/photos/bexwalton/14867566034'},
				images: [
					{img: 'img/seafront/217805015_36dcb3a9fa_q.jpg', attrib: 'https://www.flickr.com/photos/mikelo/217805015'},
					{img: 'img/seafront/14867566034_6af7448638_q.jpg', attrib: 'https://www.flickr.com/photos/bexwalton/14867566034'},
					{img: 'img/west-pier/394504492_cc09843c57_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/394504492'},
					{img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: 'https://www.flickr.com/photos/lihourj/14046071078'},
					{img: 'img/i360/29482583831_68fbc62c95_q.jpg', attrib: 'https://www.flickr.com/photos/100289769@N08/29482583831'},
					{img: 'img/west-pier/16474088376_f0aacc4138_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'}
				]
			},
			{
				name: "Day trippers,<br>Hen and Stag Dos,<br>London sorts",
				location: {lat: 50.8208433, lng: -0.1468491},
				wiki: '',
				yelp: '',
				mainImage: {img: 'img/seafront/8011854258_c75ae444a9_q.jpg', attrib: 'https://www.flickr.com/photos/ajy/8011854258'},
				images: [
					{img: 'img/seafront/148674451_adde1f1354_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/148674451'},
					{img: 'img/seafront/14774074611_d5c26bb3fa_q.jpg', attrib: ''},
					{img: 'img/i360/31803543046_6f694b9216_q.jpg', attrib: 'https://www.flickr.com/photos/mdpettitt/31803543046'},
					{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
					{img: 'img/seafront/30820692266_e3b5fa10a6_q.jpg', attrib: 'https://www.flickr.com/photos/windybeach/30820692266'},
					{img: 'img/seafront/8011854258_c75ae444a9_q.jpg', attrib: 'https://www.flickr.com/photos/ajy/8011854258'}

				]
			},
			{
				name: "Gay and Lesbian community,<br>Arty types,<br>and Hipsters",
				location: {lat: 50.8188354, lng: -0.1310034},
				wiki: '',
				yelp: '',
				mainImage: {img: 'img/wheel/8717901362_48cfeb14e7_q.jpg', attrib: 'https://www.flickr.com/photos/lamdogjunkie/8717901362'},
				images: [
					{img: 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', attrib: 'https://www.flickr.com/photos/valcker/6985876181'},
					{img: 'img/wheel/8717901362_48cfeb14e7_q.jpg', attrib: 'https://www.flickr.com/photos/lamdogjunkie/8717901362'},
					{img: 'img/palace-pier/11422095636_42781da5c7_q.jpg', attrib: 'https://www.flickr.com/photos/pavlinajane/11422095636'},
					{img: 'img/palace-pier/17537667234_405b66e6c3_q.jpg', attrib: 'https://www.flickr.com/photos/grassrootsgroundswell/17537667234'},
					{img: 'img/wheel/8503870944_3cb8c8b922_q.jpg', attrib: 'https://www.flickr.com/photos/dgoomany/8503870944'},
					{img: 'img/palace-pier/16712529701_647a6f2cb7_q.jpg', attrib: 'https://www.flickr.com/photos/glynlowe/16712529701'}
				]
			},
			{
				name: "Unemployed people<br>who like fishing",
				location: {lat: 50.81167, lng: -0.10394},
				wiki: '',
				yelp: '',
				mainImage: {img: 'img/seafront/4753329720_d362817294_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/4753329720'},
				images: [
					{img: 'img/seafront/18563876_3fc3956c8b_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/18563876'},
					{img: 'img/seafront/4753344557_a8d0611036_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/4753344557'},
					{img: 'img/seafront/4753329720_d362817294_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/4753329720'},
					{img: 'img/seafront/8765150914_2c4351fc18_q.jpg', attrib: 'https://www.flickr.com/photos/96021834@N06/8765150914'},
					{img: 'img/seafront/8705777968_7158773376_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/8705777968'},
					{img: 'img/seafront/3622810029_78511ffffd_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/3622810029'}
				]
			}
		]
	},
	{
		area: "landmarks",
		areaImages: [
			{img: 'img/pavilion/3323339269_ca33f086cb_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/3323339269'},
			{img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: 'https://www.flickr.com/photos/lihourj/14046071078'},
			{img: 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', attrib: 'https://www.flickr.com/photos/valcker/6985876181'},
			{img: 'img/west-pier/394504492_cc09843c57_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/394504492'},
			{img: 'img/i360/31803543046_6f694b9216_q.jpg', attrib: 'https://www.flickr.com/photos/mdpettitt/31803543046'},
			{img: 'img/wheel/8717901362_48cfeb14e7_q.jpg', attrib: 'https://www.flickr.com/photos/lamdogjunkie/8717901362'}
		],
		infoContent: "<p><small>Brighton has a diverse, quirky and charming range of landmarks both historic and modern. The elaborate Brighton Pavilion, Indian style on the outside, Chinese style on the inside, sets the scene for the ecclectic mishmash of the city that has grown up around it. One of its crowning moments for me was the Dr Blighty light show in Brighton festival 2016 where the whole building was lit up in a spectacular fashion using a stunning colour palette as diverse as Brighton itself. You can see a picture of one of the light formations when you click on the landmark marker.</small></p>"+
					"<p><small>On our vibrant city coast line there are a number of diverse landmarks: the two distinctive and quirky piers stretching out into the English Channel, the historic and recently beautifully refurbished bandstand, and the brand new shiny, but locally controversial i360 tower - the tallest structure in Sussex and in the Guinness book of world records as being the world most slender tower.</small></p>"+
					"<p><small>The Brighton wheel, the charming tourist attraction east of the pier was sadly dismantled on the opening of the i360, compounding the controversy surrounding Brightons newest landmark. I have included the Brighton wheel in this section on landmarks because frankly, we miss it a little bit!</small></p>",
		locations: [
			{
				name: "The Pavilion",
				location: {lat: 50.8223517, lng: -0.1376855},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Royal_Pavilion&section=0&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/pavilion/8023877916_900b7269b5_q.jpg', attrib: 'https://www.flickr.com/photos/wildlife_encounters/8023877916',},
				images: [
					{img: 'img/pavilion/3323339269_ca33f086cb_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/3323339269'},
					{img: 'img/pavilion/15790666768_99f03d8de6_q.jpg', attrib: 'https://www.flickr.com/photos/donnatomlinson/15790666768'},
					{img: 'img/pavilion/27325425745_23568c76f4_q.jpg', attrib: 'https://www.flickr.com/photos/david0287/27325425745'},
					{img: 'img/pavilion/6148841975_158004d2a4_q.jpg', attrib: 'https://www.flickr.com/photos/herry/6148841975'},
					{img: 'img/pavilion/8023877916_900b7269b5_q.jpg', attrib: 'https://www.flickr.com/photos/wildlife_encounters/8023877916_900b7269b5_q'},
					{img: 'img/pavilion/121894982_47f685cfb0_q.jpg', attrib: 'https://www.flickr.com/photos/clagnut/121894982'}
				]
			},
			{
				name: "The Bandstand",
				location: {lat: 50.8222711, lng: -0.1548171},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Bandstand&section=0&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: 'https://www.flickr.com/photos/lihourj/14046071078',},
				images: [
					// {img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: 'https://www.flickr.com/photos/lihourj/14046071078'},
					{img: 'img/bandstand/383876389_f0df733a1c_q.jpg', attrib: 'https://www.flickr.com/photos/neilhooting/383876389'},
					{img: 'img/bandstand/5845670941_97b927f301_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/5845670941'},
					{img: 'img/bandstand/6952821202_7bccaed344_q.jpg', attrib: 'https://www.flickr.com/photos/josh_emerson/6952821202'},
					{img: 'img/bandstand/4174955248_69f3ef6e82_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/4174955248'},
					{img: 'img/bandstand/4120736098_1cd0515286_q.jpg', attrib: 'https://www.flickr.com/photos/petercastleton/4120736098'},
					{img: 'img/bandstand/4225381466_e753fe2f1e_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/4225381466'}
				]
			},
			{
				name: "The Palace Pier",
				location: {lat: 50.8168555, lng: -0.136738},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Palace_Pier&section=0&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/palace-pier/1013795516_63de524d2f_q.jpg', attrib: 'https://www.flickr.com/photos/jp_london/1013795516'},
				images: [
					{img: 'img/palace-pier/1013795516_63de524d2f_q.jpg', attrib: 'https://www.flickr.com/photos/jp_london/1013795516'},
					{img: 'img/palace-pier/16712529701_647a6f2cb7_q.jpg', attrib: 'https://www.flickr.com/photos/glynlowe/16712529701'},
					{img: 'img/palace-pier/1012935875_0819ad12d9_q.jpg', attrib: 'https://www.flickr.com/photos/jp_london/1012935875'},
					{img: 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', attrib: 'https://www.flickr.com/photos/valcker/6985876181'},
					{img: 'img/palace-pier/11422095636_42781da5c7_q.jpg', attrib: 'https://www.flickr.com/photos/pavlinajane/11422095636'},
					{img: 'img/palace-pier/17537667234_405b66e6c3_q.jpg', attrib: 'https://www.flickr.com/photos/grassrootsgroundswell/17537667234'}
				]
			},
			{
				name: "The West Pier",
				location: {lat: 50.8190545, lng: -0.1519598},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=West_Pier&section=0&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/west-pier/33528982172_e567f1d0d4_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/33528982172',},
				images: [
					{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
					{img: 'img/west-pier/394504492_cc09843c57_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/394504492'},
					{img: 'img/west-pier/5967760435_c25838b65a_q.jpg', attrib: 'https://www.flickr.com/photos/damianmoore/5967760435'},
					{img: 'img/west-pier/7584224040_0136934031_q.jpg', attrib: 'https://www.flickr.com/photos/garryknight/7584224040'},
					{img: 'img/west-pier/16474088376_f0aacc4138_q.jpg', attrib: 'https://www.flickr.com/photos/130489637@N04/16474088376'},
					{img: 'img/west-pier/33528982172_e567f1d0d4_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/33528982172'}
				]
			},
			{
				name: "The i360",
				location: {lat: 50.821439, lng: -0.150754},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=British_Airways_i360&section=0&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/i360/29482583831_68fbc62c95_q.jpg', attrib: 'https://www.flickr.com/photos/100289769@N08/29482583831',},
				images: [
					{img: 'img/i360/29482583831_68fbc62c95_q.jpg', attrib: 'https://www.flickr.com/photos/100289769@N08/29482583831'},
					{img: 'img/i360/30219857810_18dd92dfb8_q.jpg', attrib: 'https://www.flickr.com/photos/neilhooting/30219857810'},
					{img: 'img/i360/30518153195_79aa8d460a_q.jpg', attrib: 'https://www.flickr.com/photos/neilhooting/30518153195'},
					{img: 'img/i360/31803543046_6f694b9216_q.jpg', attrib: 'https://www.flickr.com/photos/mdpettitt/31803543046'},
					{img: 'img/i360/32172673813_e3d512a1b5_q.jpg', attrib: 'https://www.flickr.com/photos/sagesolar/32172673813'},
					{img: 'img/i360/33125713276_d060058ea7_q.jpg', attrib: 'https://www.flickr.com/photos/davehamster/33125713276'}
				]
			},
			{
				name: "The Brighton Wheel",
				location: {lat: 50.8191078, lng: -0.1343941},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Wheel&section=0&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/wheel/6220401503_09f84eccfe_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/6220401503',},
				images: [
					{img: 'img/wheel/8717901362_48cfeb14e7_q.jpg', attrib: 'https://www.flickr.com/photos/lamdogjunkie/8717901362'},
					{img: 'img/wheel/6220401503_09f84eccfe_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/6220401503'},
					{img: 'img/wheel/6404242061_f705d146f8_q.jpg', attrib: 'https://www.flickr.com/photos/brighton/6404242061'},
					{img: 'img/wheel/6890339892_ec45b60a79_q.jpg', attrib: 'https://www.flickr.com/photos/kevandotorg/6890339892'},
					{img: 'img/wheel/8503870944_3cb8c8b922_q.jpg', attrib: 'https://www.flickr.com/photos/dgoomany/8503870944'},
					{img: 'img/wheel/14292530155_7da7988640_q.jpg', attrib: 'https://www.flickr.com/photos/simonhaytack/14292530155'}
				]
			}
		]
	},
	{
		area: "downs",
		areaImages: [
			{img: 'img/downs/devils-dyke/7818003410_5554422ef5_q.jpg', attrib: 'https://www.flickr.com/photos/_szuszu/7818003410'},
			{img: 'img/downs/ditchling-beacon/5182867968_d7fda405b6_q.jpg', attrib: 'https://www.flickr.com/photos/herry/5182867968'},
			{img: 'img/downs/ditchling-beacon/8522196132_c025b3857f_q.jpg', attrib: 'https://www.flickr.com/photos/flintman45/8522196132'},
			{img: 'img/downs/stanmer/30514648420_b9bd7c6f9a_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/30514648420'},
			{img: 'img/downs/devils-dyke/9204422764_cbe7a8a587_q.jpg', attrib: 'https://www.flickr.com/photos/petercastleton/9204422764'},
			{img: 'img/downs/devils-dyke/15523462694_f2ac554f52_q.jpg', attrib: 'https://www.flickr.com/photos/jaffathecake/15523462694'}
		],
		infoContent: "<p><small>Brighton, nestled within the South Downs on the south coast of England, has its own little microclimate, making it one of the sunniest locations within the U.K.</small></p>"+
					"<p><small>The South Downs stretching for 100 kilometers from Eastbourne to Winchester boast some beautiful scenery of stunning rolling hills and grassy peaks. The highest point in the South Downs at Ditchling beacon has views which stretch over 50miles in every direction.</small></p>"+
					"<p><small>Just a couple of miles outside of the suburbs of Brighton the Downs are the perfect antidote to city life, and and afternoon escape which can make you feel a million miles away from civilisation even although geographically they are highly accessible.</small></p>",
		locations: [
			{
				name: "Devils Dyke",
				location: {lat: 50.8826218, lng: -0.2089273},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Devil%27s_Dyke,_Sussex&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/downs/devils-dyke/7818003410_5554422ef5_q.jpg', attrib: 'https://www.flickr.com/photos/_szuszu/7818003410'},
				images: [
					{img: 'img/downs/devils-dyke/5077533_3dde6885d2_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/5077533'},
					{img: 'img/downs/devils-dyke/7818003410_5554422ef5_q.jpg', attrib: 'https://www.flickr.com/photos/_szuszu/7818003410'},
					{img: 'img/downs/devils-dyke/9204422764_cbe7a8a587_q.jpg', attrib: 'https://www.flickr.com/photos/petercastleton/9204422764'},
					{img: 'img/downs/devils-dyke/15523462694_f2ac554f52_q.jpg', attrib: 'https://www.flickr.com/photos/jaffathecake/15523462694'},
					{img: 'img/downs/devils-dyke/29649749370_513f508221_q.jpg', attrib: 'https://www.flickr.com/photos/grassrootsgroundswell/29649749370'},
					{img: 'img/downs/devils-dyke/16120010686_09969341c1_q.jpg', attrib: 'https://www.flickr.com/photos/jaffathecake/16120010686'}
					
				]
			},
			{
				name: "Ditchling Beacon",
				location: {lat: 50.9003315, lng: -0.1085077},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Ditchling_Beacon&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/downs/ditchling-beacon/5182867968_d7fda405b6_q.jpg', attrib: 'https://www.flickr.com/photos/herry/5182867968'},
				images: [
					{img: 'img/downs/ditchling-beacon/5182867968_d7fda405b6_q.jpg', attrib: 'https://www.flickr.com/photos/herry/5182867968'},
					{img: 'img/downs/ditchling-beacon/7817866622_c095d01962_q.jpg', attrib: 'https://www.flickr.com/photos/flintman45/7817866622'},
					{img: 'img/downs/ditchling-beacon/7797074966_8d7065c7e9_q.jpg', attrib: 'https://www.flickr.com/photos/_szuszu/7797074966'},
					{img: 'img/downs/ditchling-beacon/8522196132_c025b3857f_q.jpg', attrib: 'https://www.flickr.com/photos/flintman45/8522196132'},
					{img: 'img/downs/ditchling-beacon/7797073740_b405cb956c_q.jpg', attrib: 'https://www.flickr.com/photos/_szuszu/7797073740'},
					{img: 'img/downs/ditchling-beacon/26304638541_2669580158_q.jpg', attrib: 'https://www.flickr.com/photos/grassrootsgroundswell/26304638541'}
				]
			},
			{
				name: "Stanmer",
				location: {lat: 50.8634037, lng: -0.0980768},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Stanmer_Park&prop=text&format=json&callback=?",
				yelp: '',
				mainImage: {img: 'img/downs/stanmer/3289309070_de4585f7a2_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/3289309070'},
				images: [
					{img: 'img/downs/stanmer/7208670050_298d816a1a_q.jpg', attrib: 'https://www.flickr.com/photos/harveymarketingcompany/7208670050'},
					{img: 'img/downs/stanmer/3289309070_de4585f7a2_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/3289309070'},
					{img: 'img/downs/stanmer/3480212260_e7e705812d_q.jpg', attrib: 'https://www.flickr.com/photos/montpelier/3480212260'},
					{img: 'img/downs/stanmer/30183734654_c3d13387db_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/30183734654'},
					{img: 'img/downs/stanmer/30514648420_b9bd7c6f9a_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/30514648420'},
					{img: 'img/downs/stanmer/31050565261_4c2b41436e_q.jpg', attrib: 'https://www.flickr.com/photos/yandle/31050565261'}
				]
			}
		]
	},
	{
		area: "nightlife",
		areaImages: [
					{img: 'img/nightlife/audio/5008166467_eb5fcf5c09_q.jpg', attrib: 'https://www.flickr.com/photos/mixtribe/5008166467'},
					{img: 'img/nightlife/audio/5721570854_338ac38679_q.jpg', attrib: 'https://www.flickr.com/photos/catrinaustin/5721570854'},
					{img: 'img/nightlife/concorde2/4353676211_0278f1ddd3_q.jpg', attrib: 'https://www.flickr.com/photos/ryawesome/4353676211'},
					{img: 'img/nightlife/green-door/2931447597_b0a790a470_q.jpg', attrib: 'https://www.flickr.com/photos/ektogamat/2931447597'},
					{img: 'img/nightlife/concorde2/218400484_998bbcb6dd_q.jpg', attrib: 'https://www.flickr.com/photos/sam_ford/218400484'},
					{img: 'img/nightlife/audio/4997066747_e40a5664a3_q.jpg', attrib: 'https://www.flickr.com/photos/mkorcuska/4997066747'}
				],
		infoContent: "<p><small>Brighton is renowned for its pumping nightlife. With its high density of pubs, bars and clubs and other venues there is something guaranteed to suit every taste. A selection of theatres, the Brighton centre offering high profile gigs, komedia for comedy nights, dance clubs and bars representing every genre of music.</small></p>"+
					"<p><small>The city wide late licence means the town is buzzing at every hour of the night, with clubs often open until 6, with afterclubs and all night food places to head to when you're done with dancing.</small></p>"+
					"<p><small>The city has even adopted its own local spirit - Tuaca - which although generally little known outside of Brighton, is available in almost every venue in town. Commonly served as a cold smooth shot in can also be mixed with ginger ale and a slice of lime for a popular Tuscan mule giving a nod to its Italian roots.</small></p>",
		locations: [
			{
				name: "Concorde 2",
				location: {lat: 50.8173252, lng: -0.1252401},
				wiki: '',
				yelp: 'https://api.yelp.co.uk/v3/businesses/concorde-2-brighton/reviews',
				mainImage: {img: 'img/nightlife/concorde2/concorde2.jpg', attrib: '', source: 'https://www.concorde2.co.uk/'},
				images: [
					{img: 'img/nightlife/concorde2/concorde2.jpg', attrib: '', source: 'https://www.concorde2.co.uk/'},
					{img: 'img/nightlife/concorde2/4370785941_43f2e9c317_q.jpg', attrib: 'https://www.flickr.com/photos/icanfoto/4370785941'},
					{img: 'img/nightlife/concorde2/398257430_1db028926d_q.jpg', attrib: 'https://www.flickr.com/photos/matt-m/398257430'},
					{img: 'img/nightlife/concorde2/32806841594_dda58aa44b_q.jpg', attrib: 'https://www.flickr.com/photos/jordan_gillard_photography/32806841594'},
					{img: 'img/nightlife/concorde2/4353676211_0278f1ddd3_q.jpg', attrib: 'https://www.flickr.com/photos/ryawesome/4353676211'},
					{img: 'img/nightlife/audio/5008166467_eb5fcf5c09_q.jpg', attrib: 'https://www.flickr.com/photos/mixtribe/5008166467'}
				]
			},
			{
				name: "Casablanca Jazz Club",
				location: {lat: 50.8209047, lng: -0.1455632},
				wiki: '',
				yelp: 'https://api.yelp.co.uk/v3/businesses/casablanca-jazz-club-brighton-2/reviews',
				mainImage: {img: 'img/nightlife/casablancas/casablancas.jpg', attrib: '', source: 'https://www.casablancajazzclub.com/'},
				images: [
					{img: 'img/nightlife/casablancas/casablancas.jpg', attrib: '', source: 'https://www.casablancajazzclub.com/'},
					{img: 'img/nightlife/casablancas/oomph.jpg', attrib: 'https://www.casablancajazzclub.com/'},
					{img: 'img/nightlife/casablancas/1006533333_2dc9a771d1_q.jpg', attrib: 'https://www.flickr.com/photos/cowbite/1006533333'},
					{img: 'img/nightlife/casablancas/oomph2.jpg', attrib: 'http://www.rhlive.com/evening-bands/oompf/'},
					{img: 'img/nightlife/casablancas/16133843727_2e6ba77fd5_q.jpg', attrib: 'https://www.flickr.com/photos/ter-burg/16133843727'},
					{img: 'img/nightlife/concorde2/218400484_998bbcb6dd_q.jpg', attrib: 'https://www.flickr.com/photos/sam_ford/218400484'}
				]
			},
			{
				name: "Green Door Store",
				location: {lat: 50.8293094, lng: -0.1424677},
				wiki: '',
				yelp: 'https://api.yelp.co.uk/v3/businesses/green-door-store-brighton-2/reviews',
				mainImage: {img: 'img/nightlife/green-door/green-door-store.jpg', attrib: '', source: 'http://thegreendoorstore.co.uk/'},
				images: [
					{img: 'img/nightlife/green-door/green-door-store.jpg', attrib: '', source: 'http://thegreendoorstore.co.uk/'},
					{img: 'img/nightlife/concorde2/4353676211_0278f1ddd3_q.jpg', attrib: 'https://www.flickr.com/photos/ryawesome/4353676211'},
					{img: 'img/nightlife/audio/5721570854_338ac38679_q.jpg', attrib: 'https://www.flickr.com/photos/catrinaustin/5721570854'},
					{img: 'img/nightlife/green-door/3259421511_6f87d573e4_q.jpg', attrib: 'https://www.flickr.com/photos/jetalone/3259421511'},
					{img: 'img/nightlife/green-door/8999573840_b3ea80fc49_q.jpg', attrib: 'https://www.flickr.com/photos/karen_od/8999573840'},
					{img: 'img/nightlife/green-door/2931447597_b0a790a470_q.jpg', attrib: 'https://www.flickr.com/photos/ektogamat/2931447597'}
				]
			},
			{
				name: "Patterns (formally Audio)",
				location: {lat: 50.8200005, lng: -0.1373349},
				wiki: '',
				yelp: 'https://api.yelp.co.uk/v3/businesses/patterns-brighton/reviews',
				mainImage: {img: 'img/nightlife/audio/patterns.jpg', attrib: '', source: 'http://patternsbrighton.com/'},
				images: [
					{img: 'img/nightlife/audio/patterns.jpg', attrib: '', source: 'http://patternsbrighton.com/'},
					{img: 'img/nightlife/audio/194206581_2b9e190481_q.jpg', attrib: 'https://www.flickr.com/photos/elsie/194206581'},
					{img: 'img/nightlife/audio/4997066747_e40a5664a3_q.jpg', attrib: 'https://www.flickr.com/photos/mkorcuska/4997066747'},
					{img: 'img/nightlife/audio/5008166467_eb5fcf5c09_q.jpg', attrib: 'https://www.flickr.com/photos/mixtribe/5008166467'},
					{img: 'img/nightlife/audio/5721570854_338ac38679_q.jpg', attrib: 'https://www.flickr.com/photos/catrinaustin/5721570854'},
					{img: 'img/nightlife/audio/4058744515_2528d1ea7f_q.jpg', attrib: 'https://www.flickr.com/photos/wobble-san/4058744515'}
				]
			},
			{
				name: "The Volks",
				location: {lat: 50.8192982, lng: -0.1350255},
				wiki: '',
				yelp: 'https://api.yelp.co.uk/v3/businesses/volks-bar-and-club-brighton/reviews',
				mainImage: {img: 'img/nightlife/volks/volks.jpg', attrib: '', source: 'https://www.volksclub.co.uk/'},
				images: [
					{img: 'img/nightlife/volks/volks.jpg', attrib: '', source: 'https://www.volksclub.co.uk/'},
					{img: 'img/nightlife/volks/411818295_41f677d93a_q.jpg', attrib: 'https://www.flickr.com/photos/jaygooby/411818295'},
					{img: 'img/nightlife/volks/14668535524_a282740dba_q.jpg', attrib: 'https://www.flickr.com/photos/seniju/14668535524'},
					{img: 'img/nightlife/green-door/5696887715_7b759fc3ec_q.jpg', attrib: 'https://www.flickr.com/photos/king-edward/5696887715'},
					{img: 'img/nightlife/audio/5721570854_338ac38679_q.jpg', attrib: 'https://www.flickr.com/photos/catrinaustin/5721570854'},
					{img: 'img/nightlife/green-door/3259421511_6f87d573e4_q.jpg', attrib: 'https://www.flickr.com/photos/jetalone/3259421511'}
				]
			},
			{
				name: "Komedia Comedy Club",
				location: {lat: 50.824875, lng: -0.1394362},
				wiki: '',
				yelp: 'https://api.yelp.co.uk/v3/businesses/komedia-brighton-3/reviews',
				mainImage: {img: 'img/nightlife/komedia/491695767_e484e2954c_q.jpg', attrib: 'https://www.flickr.com/photos/fsse-info/491695767'},
				images: [
					{img: 'img/nightlife/komedia/10717486433_1d755366cf_q.jpg', attrib: ''},
					{img: 'img/nightlife/komedia/491695767_e484e2954c_q.jpg', attrib: 'https://www.flickr.com/photos/fsse-info/491695767'},
					{img: 'img/nightlife/komedia/2051969021_4d785383f5_q.jpg', attrib: 'https://www.flickr.com/photos/maryanne67/2051969021'},
					// {img: 'img/nightlife/komedia/13373224534_ef4a0a4ee7_q.jpg', attrib: 'https://www.flickr.com/photos/robtrick/13373224534'},
					{img: 'img/nightlife/komedia/4425063060_3675f68960_q.jpg', attrib: 'https://www.flickr.com/photos/macabrephotographer/4425063060'},
					{img: 'img/nightlife/komedia/9092710260_cf5649e678_q.jpg', attrib: 'https://www.flickr.com/photos/langecom/9092710260'},
					{img: 'img/nightlife/komedia/komedia.jpg', attrib: '', source: 'https://www.komedia.co.uk/brighton/'}
				]
			}
		]
	}
];

var onLoadInfo = {
	infoContent: "<h4>The People</h4>"+
				"<p><small>Brighton - the gay capital of England - is brimming with eccentric characters. Anything goes here in Brighton and Hove and even the most extreme of fashion statements are accepted as the norm. Brightonians are unconventional as standard. We are the only  constituency in the UK to vote in political leadership by the Green Party. There is in fact a local movement to become an independent state - The People's Republic Of Brighton And Hove! In the current political climate, one could argue that it’s an ideal that doesn't seem quite so absurd! And we have even adopted our own unconventional local spirit - Tuaca - a smooth sweet shot served best cold.</small></p>"+
				"<h4>The Events</h4>"+
				"<p><small>Brighton has an impressive Calender of annual events. The whole month of May Brighton is wrapped up in a party atmosphere as the city celebrates the Brighton festival and Brighton fringe both running concurrently for the 4 week period. With street theatre, spectacular costumes, free performances, music, art installations, pop up bars and venues, it's every locals favourite time of year! Other organised events that Brighton boasts include the annual Pride celebration, one of the biggest in Europe, the Kemptown Carnival, Paddle Round the Pier, The Great Escape, October's Comedy Festival, Wildlife Festival, Funk the Format, Shakedown / Boundary Festival, Together the People, the Brighton Zombie Walk, the Naked Bike Ride - we have an occasion for whatever your preference!</small></p>"+
				"<h4>The Vibe</h4>"+
				"<p><small>Even when there's not an organised event on, the sheer volume of visitors in the summer months, the density of pubs and clubs of every description, and the best summer hang out spots all equal one thing: Brighton vibes - as standard! If the sun has been shining, or the moon is full, or the day has a y in it, there will be crazy's to be found and fun to be had.</small></p>",
	photos:	[
		{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
		{img: 'img/seafront/217805015_36dcb3a9fa_q.jpg', attrib: 'https://www.flickr.com/photos/mikelo/217805015'},
		{img: 'img/palace-pier/11422095636_42781da5c7_q.jpg', attrib: 'https://www.flickr.com/photos/pavlinajane/11422095636'},
		{img: 'img/pavilion/8023877916_900b7269b5_q.jpg', attrib: 'https://www.flickr.com/photos/wildlife_encounters/8023877916',},
		{img: 'img/north-laine/5781531147_80b1b59b0e_q.jpg', attrib: 'https://www.flickr.com/photos/llamnuds/5781531147'},
		{img: 'img/seafront/379606222_7c6a271b2b_q.jpg', attrib: 'https://www.flickr.com/photos/neilhooting/379606222'}
	]
};

/////////////////////  VIEWMODEL ///////////////////////////////

var ViewModel = function(){

	var self = this;

	this.markers = [];

	// Makes my model data observable and useable by the view via the ViewModel.
	this.poiList = ko.observableArray([]); // observable array of objects

	// Populate the observable array 
	poi.forEach(function(object){
		self.poiList.push(object);
		// console.log(object);
	});

	this.selectedCategory = ko.observable();

	this.clickCategory = function(clicked){
		self.selectedCategory(clicked);
		// console.log(clicked.area);
		// var element = ;
		// if (clicked.area === 'landmarks') {
		// 	$('li').css('color', 'red');
		// } else {
		// 	return;
		// };
		// $('li:contains("beach")').css('color', 'red');
		// $('#list').addClass('selected');
		// self.selectedCategory.addClass('selected');
	};

	// Observe when the selectedCategory changes and call the showMarkers and showPhotos function for that area
	this.selectedCategory.subscribe(function(){
		self.showMarkers(self.selectedCategory().area);
		self.showCategoryInfo(self.selectedCategory());
		// self.listStyling(self.selectedCategory().area);
		// console.log(self.selectedCategory().area);
		// self.selectedCategory().area.style(color, 'red');
	});

	this.showMarkers = function(findArea) {

		// Clear all markers
		for (var i=0; i<self.markers.length; i++){
			self.markers[i].setMap(null);
		};
		// Clear array - not strictly necessary but will stop array getting clogged up with markers
		self.markers = [];

		// Add markers
		var bounds = new google.maps.LatLngBounds();

		// Argument of area here is referring to the whole object
		// When showMarkers function is called initially in the init function, it is passed an argument of null, so will show markers in all areas
		// Otherwise filter for where the object area, area property, is equal to the area passed in by the selectedCategory.
		poi.forEach(function(area) {
			if (findArea == null || area.area == findArea) {
				area.locations.forEach(function(location) {

					// Make markers
					var marker = new google.maps.Marker({
                        map: self.map,
                        position: location.location,
                        title: location.name,
                        image: location.mainImage.img,
                        attrib: location.mainImage.attrib,
                        animation: google.maps.Animation.DROP
                    });

                    bounds.extend(location.location);

                    // Push markers to markers array
                    self.markers.push(marker);
                    marker.addListener('click', function(){
                        self.populateInfoWindow(this, self.smallInfowindow);
                        self.populateImageArea(this, location.images);
                        // self.showWikiInfo(this, location);
                    });

				});
			}
		});

		self.map.fitBounds(bounds);

	};

	// this.listStyling = function (selected) {
	// 	$("#list").removeClass('selected').addClass('selected', self);
	// }

	this.populateInfoWindow = function (marker, infowindow){
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<h5>'+marker.title+'</h5><figure><img src="'+marker.image+'" alt="image of "'+marker.title+'><figcaption class="attrib"><a href="'+marker.attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
			infowindow.open(self.map, marker);
			// CLear marker property if infowindow is closed
			infowindow.addListener('closeclilck', function() {
				infowindow.setMarker(null);
			})
		}
	};

	// To display images relating to a specific marker
	this.populateImageArea = function (marker, imagesArray){
		$('#imageDisplay').empty();
		for (var i=0; i<imagesArray.length; i++){
			$('#imageDisplay').append('<figure><img src="'+imagesArray[i].img+'" class="img-responsive" alt="image of '+marker.title+'"><figcaption class="attrib"><a href="'+marker.attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
		};
	};
	
	// To display images and info relating to the category 
	this.showCategoryInfo = function (object) {
		$('#imageDisplay').empty();
		for (var i=0; i<object.areaImages.length; i++){
			$('#imageDisplay').append('<figure><img src="'+object.areaImages[i].img+'" class="img-responsive" alt="image of '+object.area+'"><figcaption class="attrib"><a href="'+object.areaImages[i].attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
		};
		$('#infoDisplayHead, #infoDisplayBody').empty();
		$('#infoDisplayHead').append('The '+object.area);
		$('#infoDisplayBody').append(object.infoContent);

	};

	// this.showWikiInfo = function (marker, object) {
	// 	console.log(object.wiki);
	// 	loadWiki(object);
	// 	// if (object.wiki !== '') {
	// 	// 	// var wiki = ;
	// 	// 	$('#infoDisplayHead').append('The '+object.area);
	// 	// 	$('#infoDisplayBody').append(loadWiki(object));
	// 	// }
	// };

	// this.loadWiki = function (argument) {
	// 	var $wikiElem = $('#infoDisplayBody');
	// 	// clear out old data before new request
	//     $wikiElem.text("");
	//     // load Wikipedia articles via AJAX request and JSON-P to get round CORS
	//     var wikiUrl = argument.wiki

	//     var wikiRequestTimeout = setTimeout(function(){
	//         $wikiElem.text("failed to get Wikipedia resources");
	//     }, 8000);

	//     $.ajax({
	// 	    type: "GET",
	// 	    url: wikiUrl,
	// 	    contentType: "application/json; charset=utf-8",
	// 	    async: true,
	// 	    dataType: "json",
	// 	    success: function (response) {

	// 	        var markup = data.parse.text["*"];
	// 	        var blurb = $('<div></div>').html(markup);
	// 	        $('#infoDisplayBody').html($(blurb).find('p'));

	// 	    },
	// 	    clearTimeout(wikiRequestTimeout);
	// 	})
	// 	return false;
	// };

	this.onLoadDisplay = function (content) {
		$('#imageDisplay').empty();
		for (var i=0; i<content.photos.length; i++){
			$('#imageDisplay').append('<figure><img src="'+content.photos[i].img+'" alt="image of Brighton"><figcaption class="attrib"><a href="'+content.photos[i].attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
		};
		$('#infoDisplayHead,  #infoDisplayBody').empty();
		$('#infoDisplayHead').append('What makes Brighton cooler than an Eskimos sunglasses is...');
		$('#infoDisplayBody').append(content.infoContent);
	}

	// this.infoDisplay = function ()

	this.init = function() {

		self.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.827022, lng: -0.158278},
            zoom: 12
        });
       
        self.smallInfowindow = new google.maps.InfoWindow();

        // Initially call showMarkers with filter as empty
        self.showMarkers(null);
        self.onLoadDisplay(onLoadInfo);
	};
};

// Variable can be accessed easily from outside of this object
var vm = new ViewModel();
ko.applyBindings(vm);

// SOMEWAY TO LOAD THE LOADWIKI (Was loadData function in example)
// $('#form-container').submit(loadData);


// TO DO

// FUNCTIONALIY
// selectedCategory li styling
// Load Wiki api on individual marker load - For categories Lanes, Landmarks, Downs. No data for Beach, Nightlife.
// Load Yelp api on individual marker load - For category Nightlife ONLY.
// Bonus: selecting a marker selects the category the marker belongs to

// CSS
// Images area to display central or right of row


