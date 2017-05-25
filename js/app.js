///////////////////  MODEL  /////////////////////

// places of interest
var poi = [
	{
	area: "lanes",
	areaImages: [
		{img: 'img/north-laine/4160169690_9f625d73fa_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/4160169690/in/photolist-7kBXvC-89qM2t-bTJYCt-4buhBR-4GBY7a-dyRXBY-dyLzBT-8ktYee-dyS5bC-dyLxa8-dyLuWr-dyLwFc-dyLxTx-4BweSk-dyLxJe-dyLup4-dyRXem-bTJWHx-8ktXQP-dyRYM7-7ky5Ne-SaWjjW-3Mi56-SpJV62-bQdNW8-axaPZe-UnfpW-dyLA2p-dyLwXc-VravN-LJSvA-dyS1Hb-UkXzK-dyS5r9-dyLw4g-bEQfR3-dyLvgR-UkZ24-UkYhP-dyLwtB-7e3UpM-Und75-6qBpYf-9QdxFG-o12ECG-8Y3vBJ-ohegaH-durTi7-UkZMk-Ca1zw7'},
		{img: 'img/north-laine/5781531147_80b1b59b0e_q.jpg', attrib: 'https://www.flickr.com/photos/llamnuds/5781531147/in/photolist-9NTRMv-8do838-muerZg-5EvoYD-dzqjG1-7CKf4k-7ENnWs-e8CMCk-7ENmWs-e8JobN-dzjNJc-e8JgFL-7EJx1P-e8JqsL-e8JhCb-5dTEt4-hgL9i-3doEtF-6YuP7h-734eP6-2xkVCo-f2xRN6-7CP4kb-4o5qQJ-7xsThK-adB26a-njLjbN-7MCV4C-8XdXMb-9c1r18-qJLo46-qDhZzN-eYeewV-fZiSoo-adom2Q-5EzMHw-adAYge-adoL4E-bfRW88-P7C3cX-dzqkg7-aCW4Bg-pn4arb-7DgZaU-adoktA-fZiQYt-7cv2M2-8HW8u-5Q1jE-8UTB2A'},
		{img: 'img/north-laine/6049831939_5b979cf9bc_q.jpg', attrib: 'https://www.flickr.com/photos/gareth1953/6049831939/in/photolist-adAYge-adoL4E-bfRW88-P7C3cX-dzqkg7-aCW4Bg-pn4arb-7DgZaU-adoktA-fZiQYt-7cv2M2-8HW8u-5Q1jE-8UTB2A-NE1ygN-dzqjhY-pUXgB-4twsT1-9vuFbW-7DgY6h-buZzEz-nfTp5b-4bEYdJ-ADXaFC-c6qSc1-dZ4BY6-q59V6a-95pW3U-5dTAiD-o7Yqp-cpbGH-hu1i4Z-nYjS3P-bknRpY-96rPcA-cQ1xhE-5wagPE-9ykakx-pfMkv4-7X6vrS-95mVBF-dzjQ26-p2aEdS-MEZEc-7X3gd2-akmtUa-96pzT2-axy84k-96rPJA-7DdccT'},
		{img: 'img/south-lanes/6070703057_38161fb4d2_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/6071247928/in/photolist-afuJuq-aez6gA-ae3935-aeSQ1W-3PqpV-fqpoxb-fqo59u-fqm6Fc-aeSRPy-fqmg4n-adqoiN-6KUHGR-3YqLjY-aeBYJG-af8q7T-afhtTS-afamun-dgJoN6-adctPA-aez2ES-aewaqP-aeQ6YR-fD5dfr-6KVyQZ-3YmcLR-oSFDuw-adZj8D-afwYM1-3Pq5v-afrNWk-aeEKxX-fqphZb-fqpjm1-afwZHj-ae2LMu-adqwz9-fon9Mr-afatZi-aeBYUh-jnuwW-afuFNC-fqo9bY-3PoU7-fqaknK-adZsnC-afhsod-8qQ5QB-3Pr5G-ojqFHc-fDmK4E'},
		{img: 'img/south-lanes/24046937695_0752f8f814_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/24046937695/in/photolist-CCWQN4-6Vj7qn-Brx5iG-aZLu7T-6kAjgg-mr7n9z-mr7wZM-v5Cwgq-xxWBXL-CgPgV6-BFyrdv-CtSihX-Cgi2Ff-Cgi2ey-8jFmf1-BDM3Va-CtSiBp-CEDcDr-BWYpg3-C5mpDa-CvDHXx-BH8n2d-CdvNcw-CBapk6-BWV7n9-BH8mdj-Ca2W4C-CgPhZa-9QYGmd-CvDJDn-BFr3Fb-CtikNf-BWV4Fh-wLFb1L-Cfh4bL-Ca34ju-Cfh4ZE-CewMib-BrEaP6-CrAGBC-CEzTcn-C5mo2c-mr8JzE-CCh9Nb-C3E1S4-CrAHJh-Cxhzrz-BHcskF-Kxhtkm-BH52Ky'},
		{img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090/in/photolist-Ca2W4C-CgPhZa-9QYGmd-CvDJDn-BFr3Fb-CtikNf-BWV4Fh-wLFb1L-Cfh4bL-Ca34ju-Cfh4ZE-CewMib-BrEaP6-CrAGBC-CEzTcn-C5mo2c-mr8JzE-CCh9Nb-C3E1S4-CrAHJh-Cxhzrz-BHcskF-Kxhtkm-BH52Ky-CvyC9P-CvyBFe-CyREDS-v5Cwgq-xxWBXL-6kAjgg-mr7n9z-mr7wZM-wMA3qg-A3gwk9-y4boEi-H6Gses-uU5v8u-AY7iSA-xkj4gw-vcXPmR-yqr5pr-wF45vg-rJXq84-xtpAvm-uVvK2F-vcrYi5-ujRodv-veod2h-yXKzvb-FDS1Yz'},
		],
		// 'img/north-laine/4160169690_9f625d73fa_q.jpg', 'img/north-laine/5781531147_80b1b59b0e_q.jpg', 'img/north-laine/6049831939_5b979cf9bc_q.jpg'],
	locations: [
		{
			name: "North Laine",
			location: {lat: 50.8249028, lng: -0.1395479},
			wiki: '',
			mainImage: {img: 'img/north-laine/19448793731_6f7f389dcb_q.jpg', attrib: 'https://www.flickr.com/photos/garryknight/19448793731/in/photolist-urBK39-76Fbs-bVSKd-5WVuhX-EtnHK-2HDVaV-9Qdx2b-3JEsC-3yx5u-JV4PAY-J2E6YD-JV4RKN-dTNSBL-5WVqXZ-5WVsHz-5WVuQZ-5uZrFV-8YRc92-8wmmnG-5r6nm2-JUH2Eo-5WZJdj-5WZEWS-bEQ9uu-3yx4d-89ucaQ-89unMm-6oaegi-6oaefr-5WZEqY-6bsxZK-97thda-JxfzAh-JxfAEb-JxfAML-J2Djpd-6oaegX-5WVtfg-5aGf1D-n8uCV-49y5db-vCC9MR-z4Txj1-dyS4Bu-dyLvAK-bTJUR4-9QaG8P-9QaFwM-5soVj4-2fpPer'},
			images: [
				{img: 'img/north-laine/4160169690_9f625d73fa_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/4160169690/in/photolist-7kBXvC-89qM2t-bTJYCt-4buhBR-4GBY7a-dyRXBY-dyLzBT-8ktYee-dyS5bC-dyLxa8-dyLuWr-dyLwFc-dyLxTx-4BweSk-dyLxJe-dyLup4-dyRXem-bTJWHx-8ktXQP-dyRYM7-7ky5Ne-SaWjjW-3Mi56-SpJV62-bQdNW8-axaPZe-UnfpW-dyLA2p-dyLwXc-VravN-LJSvA-dyS1Hb-UkXzK-dyS5r9-dyLw4g-bEQfR3-dyLvgR-UkZ24-UkYhP-dyLwtB-7e3UpM-Und75-6qBpYf-9QdxFG-o12ECG-8Y3vBJ-ohegaH-durTi7-UkZMk-Ca1zw7'},
				{img: 'img/north-laine/5781531147_80b1b59b0e_q.jpg', attrib: 'https://www.flickr.com/photos/llamnuds/5781531147/in/photolist-9NTRMv-8do838-muerZg-5EvoYD-dzqjG1-7CKf4k-7ENnWs-e8CMCk-7ENmWs-e8JobN-dzjNJc-e8JgFL-7EJx1P-e8JqsL-e8JhCb-5dTEt4-hgL9i-3doEtF-6YuP7h-734eP6-2xkVCo-f2xRN6-7CP4kb-4o5qQJ-7xsThK-adB26a-njLjbN-7MCV4C-8XdXMb-9c1r18-qJLo46-qDhZzN-eYeewV-fZiSoo-adom2Q-5EzMHw-adAYge-adoL4E-bfRW88-P7C3cX-dzqkg7-aCW4Bg-pn4arb-7DgZaU-adoktA-fZiQYt-7cv2M2-8HW8u-5Q1jE-8UTB2A'},
				{img: 'img/north-laine/6049831939_5b979cf9bc_q.jpg', attrib: 'https://www.flickr.com/photos/gareth1953/6049831939/in/photolist-adAYge-adoL4E-bfRW88-P7C3cX-dzqkg7-aCW4Bg-pn4arb-7DgZaU-adoktA-fZiQYt-7cv2M2-8HW8u-5Q1jE-8UTB2A-NE1ygN-dzqjhY-pUXgB-4twsT1-9vuFbW-7DgY6h-buZzEz-nfTp5b-4bEYdJ-ADXaFC-c6qSc1-dZ4BY6-q59V6a-95pW3U-5dTAiD-o7Yqp-cpbGH-hu1i4Z-nYjS3P-bknRpY-96rPcA-cQ1xhE-5wagPE-9ykakx-pfMkv4-7X6vrS-95mVBF-dzjQ26-p2aEdS-MEZEc-7X3gd2-akmtUa-96pzT2-axy84k-96rPJA-7DdccT'},
				{img: 'img/north-laine/8198189888_b10dd501df_q.jpg', attrib: 'https://www.flickr.com/photos/martinhearn/8198189888/in/photolist-durSew-o12Aqp-o12LFV-oheAMi-o12rM3-fv9dc7-ohvZqX-fuTN2r-fv98Qm-fuTTiP-fv9dFy-7X6vrS-2HEdVX-rZcgJg-6qxfWx-ofujPJ-o12P8s-o12zNm-bEQdk9-uHJ4Jm-4HLLs-JNTjkf-J2E6HD-8jpSWL-o12ywe-2JvqwC-ohkdYu-o12x2u-ohkmnh-K4U8tr-6qxfyk-4bWqa8-6qxfJr-o12tkc-durPrU-bEQcPy-ojgYTD-o12CfM-o12FzS-o12haC-o12qkJ-ofugGb-o13K6X-ohw7nc-o12r4j-o12rR9-o12ryB-ohkoNE-o12snF-77ZLJ3'},
				{img: 'img/north-laine/17056158615_4b51e5b75f_q.jpg', attrib: 'https://www.flickr.com/photos/tarquingemstone/17056158615/in/photolist-rZcgJg-6qxfWx-ofujPJ-o12P8s-o12zNm-bEQdk9-uHJ4Jm-4HLLs-JNTjkf-J2E6HD-8jpSWL-o12ywe-2JvqwC-ohkdYu-o12x2u-ohkmnh-K4U8tr-6qxfyk-4bWqa8-6qxfJr-o12tkc-durPrU-bEQcPy-ojgYTD-o12CfM-o12FzS-o12haC-o12qkJ-ofugGb-o13K6X-ohw7nc-o12r4j-o12rR9-o12ryB-ohkoNE-o12snF-77ZLJ3-ohvUHv-ohk6NN-o12H8n-ohtsMU-o13PZ4-2HGPDR-2HEg1t-2HFkXH-2HHARU-2HEp2z-2HD452-5dSdGT-5sgSBy'},
				{img: 'img/north-laine/19448793731_6f7f389dcb_q.jpg', attrib: 'https://www.flickr.com/photos/garryknight/19448793731/in/photolist-urBK39-76Fbs-bVSKd-5WVuhX-EtnHK-2HDVaV-9Qdx2b-3JEsC-3yx5u-JV4PAY-J2E6YD-JV4RKN-dTNSBL-5WVqXZ-5WVsHz-5WVuQZ-5uZrFV-8YRc92-8wmmnG-5r6nm2-JUH2Eo-5WZJdj-5WZEWS-bEQ9uu-3yx4d-89ucaQ-89unMm-6oaegi-6oaefr-5WZEqY-6bsxZK-97thda-JxfzAh-JxfAEb-JxfAML-J2Djpd-6oaegX-5WVtfg-5aGf1D-n8uCV-49y5db-vCC9MR-z4Txj1-dyS4Bu-dyLvAK-bTJUR4-9QaG8P-9QaFwM-5soVj4-2fpPer'}
			]
		},
		{
			name: "The South Lanes",
			location: {lat: 50.8219453, lng: -0.1404023},
			wiki: '',
			mainImage: {img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090/in/photolist-Ca2W4C-CgPhZa-9QYGmd-CvDJDn-BFr3Fb-CtikNf-BWV4Fh-wLFb1L-Cfh4bL-Ca34ju-Cfh4ZE-CewMib-BrEaP6-CrAGBC-CEzTcn-C5mo2c-mr8JzE-CCh9Nb-C3E1S4-CrAHJh-Cxhzrz-BHcskF-Kxhtkm-BH52Ky-CvyC9P-CvyBFe-CyREDS-v5Cwgq-xxWBXL-6kAjgg-mr7n9z-mr7wZM-wMA3qg-A3gwk9-y4boEi-H6Gses-uU5v8u-AY7iSA-xkj4gw-vcXPmR-yqr5pr-wF45vg-rJXq84-xtpAvm-uVvK2F-vcrYi5-ujRodv-veod2h-yXKzvb-FDS1Yz'},
			images: [
				{img: 'img/south-lanes/6070703057_38161fb4d2_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/6071247928/in/photolist-afuJuq-aez6gA-ae3935-aeSQ1W-3PqpV-fqpoxb-fqo59u-fqm6Fc-aeSRPy-fqmg4n-adqoiN-6KUHGR-3YqLjY-aeBYJG-af8q7T-afhtTS-afamun-dgJoN6-adctPA-aez2ES-aewaqP-aeQ6YR-fD5dfr-6KVyQZ-3YmcLR-oSFDuw-adZj8D-afwYM1-3Pq5v-afrNWk-aeEKxX-fqphZb-fqpjm1-afwZHj-ae2LMu-adqwz9-fon9Mr-afatZi-aeBYUh-jnuwW-afuFNC-fqo9bY-3PoU7-fqaknK-adZsnC-afhsod-8qQ5QB-3Pr5G-ojqFHc-fDmK4E'},
				{img: 'img/south-lanes/9837521426_c1404d107b_q.jpg', attrib: 'https://www.flickr.com/photos/stephencleary/9837521426/in/photolist-fZiSoo-adom2Q-adoL4E-bfRW88-aCW4Bg-7cv2M2-8UTB2A-pUXgB-9ykakx-p2aEdS-akmtUa-5EzMHw-adAYge-P7C3cX-dzqkg7-7DgZaU-pn4arb-adoktA-fZiQYt-8HW8u-5Q1jE-NE1ygN-dzqjhY-4twsT1-9vuFbW-7DgY6h-buZzEz-nfTp5b-4bEYdJ-ADXaFC-c6qSc1-dZ4BY6-q59V6a-95pW3U-5dTAiD-o7Yqp-cpbGH-hu1i4Z-nYjS3P-bknRpY-96rPcA-cQ1xhE-5wagPE-pfMkv4-7X6vrS-95mVBF-dzjQ26-MEZEc-7X3gd2-96pzT2'},
				{img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090/in/photolist-Ca2W4C-CgPhZa-9QYGmd-CvDJDn-BFr3Fb-CtikNf-BWV4Fh-wLFb1L-Cfh4bL-Ca34ju-Cfh4ZE-CewMib-BrEaP6-CrAGBC-CEzTcn-C5mo2c-mr8JzE-CCh9Nb-C3E1S4-CrAHJh-Cxhzrz-BHcskF-Kxhtkm-BH52Ky-CvyC9P-CvyBFe-CyREDS-v5Cwgq-xxWBXL-6kAjgg-mr7n9z-mr7wZM-wMA3qg-A3gwk9-y4boEi-H6Gses-uU5v8u-AY7iSA-xkj4gw-vcXPmR-yqr5pr-wF45vg-rJXq84-xtpAvm-uVvK2F-vcrYi5-ujRodv-veod2h-yXKzvb-FDS1Yz'},
				{img: 'img/south-lanes/24046937695_0752f8f814_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/24046937695/in/photolist-CCWQN4-6Vj7qn-Brx5iG-aZLu7T-6kAjgg-mr7n9z-mr7wZM-v5Cwgq-xxWBXL-CgPgV6-BFyrdv-CtSihX-Cgi2Ff-Cgi2ey-8jFmf1-BDM3Va-CtSiBp-CEDcDr-BWYpg3-C5mpDa-CvDHXx-BH8n2d-CdvNcw-CBapk6-BWV7n9-BH8mdj-Ca2W4C-CgPhZa-9QYGmd-CvDJDn-BFr3Fb-CtikNf-BWV4Fh-wLFb1L-Cfh4bL-Ca34ju-Cfh4ZE-CewMib-BrEaP6-CrAGBC-CEzTcn-C5mo2c-mr8JzE-CCh9Nb-C3E1S4-CrAHJh-Cxhzrz-BHcskF-Kxhtkm-BH52Ky'},
				{img: 'img/south-lanes/1011055674_973d6fcd17_q.jpg', attrib: 'href="https://www.flickr.com/photos/sarahcord/1011055674/in/photolist-2xkVCo-f2xRN6-7CP4kb-4o5qQJ-7xsThK-njLjbN-7MCV4C-8XdXMb-9c1r18-qDhZzN-eYeewV-fZiSoo-adom2Q-adoL4E-bfRW88-aCW4Bg-7cv2M2-8UTB2A-pUXgB-9ykakx-p2aEdS-akmtUa-5EzMHw-adAYge-P7C3cX-dzqkg7-7DgZaU-pn4arb-adoktA-fZiQYt-8HW8u-5Q1jE-NE1ygN-dzqjhY-4twsT1-9vuFbW-7DgY6h-buZzEz-nfTp5b-4bEYdJ-ADXaFC-c6qSc1-dZ4BY6-q59V6a-95pW3U-5dTAiD-o7Yqp-cpbGH-hu1i4Z-nYjS3P'},
				{img: 'img/south-lanes/4685129550_aec1a184ac_q.jpg', attrib: 'https://www.flickr.com/photos/eguidetravel/4685129550/in/photolist-891vMG-8eXqdD-8drpHs-9NTRMv-8do838-muerZg-5EvoYD-dzqjG1-7CKf4k-7ENnWs-7ENmWs-e8JgFL-e8JqsL-e8JhCb-6YuP7h-adB26a-qJLo46-dzjNJc-7EJx1P-5dTEt4-hgL9i-3doEtF-734eP6-2xkVCo-f2xRN6-7CP4kb-4o5qQJ-7xsThK-njLjbN-7MCV4C-8XdXMb-9c1r18-qDhZzN-eYeewV-fZiSoo-adom2Q-adoL4E-bfRW88-aCW4Bg-7cv2M2-8UTB2A-pUXgB-9ykakx-p2aEdS-akmtUa-5EzMHw-adAYge-P7C3cX-dzqkg7-7DgZaU'}
			] 
		// 	images: ['<a data-flickr-embed="true"  href="https://www.flickr.com/photos/wildlife_encounters/10818627595/in/photolist-hu1i4Z-nYjS3P-bknRpY-96rPcA-cQ1xhE-5wagPE-pfMkv4-7X6vrS-95mVBF-dzjQ26-MEZEc-7X3gd2-96pzT2-axy84k-96rPJA-9kC5UV-q9ajpX-8DCU2y-8Sawfx-q9483G-dVssY-9goaDB-hi9Eq7-dYRTB1-7DdccT-8AMjEQ-95pWPS-7DdbUe-4tdQ9y-5HjnQK-95pR8j-2fybr7-6Vobpq-2fybrW-95mQbV-95pVdQ-7FXksZ-8y93dJ-6PUBRh-bBteKf-8S8ftn-5LXd7j-7FXjLg-cFBHnh-bBtepS-KGBYg8-5HjnhZ-beXH8P-9aH4j5-oUTuKM" title="symmetry of a mirror reflection in the lanes"><img src="https://c1.staticflickr.com/8/7396/10818627595_0f73d0e586_q.jpg" width="150" height="150" alt="symmetry of a mirror reflection in the lanes"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
		// 			'<a data-flickr-embed="true"  href="https://www.flickr.com/photos/dullhunk/30923698525/in/photolist-P7C3cX-dzqkg7-7DgZaU-pn4arb-adoktA-fZiQYt-8HW8u-5Q1jE-NE1ygN-dzqjhY-4twsT1-9vuFbW-7DgY6h-buZzEz-nfTp5b-4bEYdJ-ADXaFC-c6qSc1-dZ4BY6-q59V6a-95pW3U-5dTAiD-o7Yqp-cpbGH-hu1i4Z-nYjS3P-bknRpY-96rPcA-cQ1xhE-5wagPE-pfMkv4-7X6vrS-95mVBF-dzjQ26-MEZEc-7X3gd2-96pzT2-axy84k-96rPJA-9kC5UV-q9ajpX-8DCU2y-8Sawfx-q9483G-dVssY-9goaDB-hi9Eq7-dYRTB1-7DdccT-8AMjEQ" title="The Lanes #Brighton"><img src="https://c1.staticflickr.com/6/5641/30923698525_f15d7cf1cb_q.jpg" width="150" height="150" alt="The Lanes #Brighton"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
		// 			
		}]
	},
	{
	area: "beach",
	areaImages: ['img/seafront/148674451_adde1f1354_q.jpg', 'img/seafront/217805015_36dcb3a9fa_q.jpg', 'img/seafront/379606222_7c6a271b2b_q.jpg', 'img/seafront/9671912424_06227e046c_q.jpg', 'img/seafront/14774074611_d5c26bb3fa_q.jpg', 'img/seafront/14867566034_6af7448638_q.jpg'],
	infoContent: {img: '535986_a24d509562be44cca103ce3a9273dcc3-mv2_d_2480_2067_s_2.webp', attrib: 'https://www.phillucas.com/single-post/2014/10/16/Know-Where-to-Sit-on-Brighton-Beach'},
	locations: [
		{
			name: "Old people who swim in the sea every single day of the year",
			location: {lat: 50.8201789, lng: -0.1426435},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		},
		{
			name: "Lovers of bongo drum",
			location: {lat: 50.8201789, lng: -0.1426435},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		}
	]},
	{
	area: "landmarks",
	areaImages: [
		{img: 'img/pavilion/5228108302_aa4375a233_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/5228108302/in/photolist-8XZqsj-DqW7Xa-aBJ2qT-4sjLi3-HveBcg-8FAKrV-audb11-5Xvocn-4gDmrE-riLuq6-2FU8tq-GFLCzf-4wnwyH-SWLk9q-8XaEaM-6L3gAk-bAcx3B-64K9YN-89r3gx-89u3WL-onyNHJ-9HqbZ9-p3XyBb-pZSTej-96sBZq-64KaH3-6hnpSw-CnnD4z-64EDAt-93U8jR-iFeiBJ-64EBzT-q88AmQ-8XdG4q-dJEi9y-ue56u-3ZZXN2-4wnws6-8XKa8E-xgMzfh-nfiiMy-5Dz34z-fon31F-iznmYm-6L3gA8-bFbyL3-qiLHVm-3Qggxh-4mosQB-9rZiXu'},
		{img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: ''},
		{img: 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', attrib: ''},
		{img: 'img/west-pier/394504492_cc09843c57_q.jpg', attrib: ''},
		{img: 'img/i360/31803543046_6f694b9216_q.jpg', attrib: ''},
		{img: 'img/wheel/8717901362_48cfeb14e7_q.jpg', attrib: ''}
	],
	locations: [
		{
			name: "The Pavilion",
			location: {lat: 50.8223517, lng: -0.1376855},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Royal_Pavilion&section=0&prop=text&format=json&callback=?",
			mainImage: {img: 'img/pavilion/8023877916_900b7269b5_q.jpg', attrib: '',},
			images: [
				{img: 'img/pavilion/3323339269_ca33f086cb_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/3324484730/in/photolist-64LRuf-31N76-65LrwD-73xynK-p5zj9u-64EYYV-8csV1A-bLJfF-8baMSQ-65y9aD-5R5i63-8b7voa-8baMQS-3rreY-bnhFHj-FitnYr-NgqEC5-7sHyBb-8baMTQ-fg9wLP-cCkHJb-eFxhN4-nh4rdh-bjv6RH-anmvBn-65Cs3u-bAcxLp-5Xvpwn-eYBsNd-5Xvqti-anpkuG-4wrFgE-7sDA8R-bLK8C-5XvnQz-65CsLL-anpkE9-anmquP-bLKdu-anmrmr-SX12Pr-7F6kqu-5pyTuu-odrr6H-91g4jy-9HqbVh-nCoXNm-cdBnB9-HCDX56-dTgEGG'},
				{img: 'img/pavilion/15790666768_99f03d8de6_q.jpg', attrib: ''},
				{img: 'img/pavilion/27325425745_23568c76f4_q.jpg', attrib: 'https://www.flickr.com/photos/david0287/27325425745/in/photolist-HCDX56-dTgEGG-64KkJU-8XWn7T-7CNEkm-BbP2-8XGeFi-iFinb7-91yVxN-91vNAr-5651HP-dbgjZW-efimyE-dbgkmf-7CNCu9-7MzdBM-7CNFHo-dkiPA2-9ujx1c-nrudyf-8XGbek-7JVZYp-ho1PMZ-rbvyLc-anphHy-anphpq-9Kbze8-22BWD-3Qc6HM-anpej1-5sS8kc-anmrDP-9QaHBT-anph3Y-4wnwue-8XZsFg-iSgkx-fHvWWW-9KbxHM-3hfCoV-9s5Ezc-49TLoj-3Qgf4N-99R2X-9QdyFy-9QaHf2-anpgCL-NGBNF-8XZsHP-DoC5dw'},
				{img: 'img/pavilion/6148841975_158004d2a4_q.jpg', attrib: ''},
				{img: 'img/pavilion/8023877916_900b7269b5_q.jpg', attrib: 'https://www.flickr.com/photos/wildlife_encounters/8023877916/in/photolist-de3tmG-EidS-pM5Np-pM5NZ-7F6n6y-3gRHR5-56suzY-8cpzCM-dcYN4c-bUtno4-egKt6y-cbQvXN-6quzJg-4qDNJe-391dHn-bAcMx6-jTEi-bnhV3d-bAcKDt-bnhUSG-bAcMdz-bnhVvY-jTEq-bAcLpZ-kmKT-3gMffH-3gjP6m-5h9Z5o-6jaP1J-5bTxF-7Sr4zX-MKcNm-3Qc2aB-MKkKp-bAcM3x-cYsooQ-bAcLd8-i9ThZ-ue58h-MKkE4-5WY5Ku-bnhVRq-nh4u1v-5ArfSZ-nh4sTS-8pxCny-9SPxYq-8purqx-eYBtmW-7pdW2Q'},
				{img: 'img/pavilion/121894982_47f685cfb0_q.jpg', attrib: ''}
			]
		},
		{
			name: "The Bandstand",
			location: {lat: 50.8247058, lng: -0.1413334},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Bandstand&section=0&prop=text&format=json&callback=?",
			mainImage: {img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: '',},
			images: ['img/bandstand/14046071078_04e9688f83_q.jpg', 'img/bandstand/31376329692_1d531d7ec3_q.jpg', 'img/bandstand/6952821202_7bccaed344_q.jpg', 'img/bandstand/4174955248_69f3ef6e82_q.jpg', 'img/bandstand/4120736098_1cd0515286_q.jpg', 'img/bandstand/4225381466_e753fe2f1e_q.jpg']
		},
		{
			name: "The Palace Pier",
			location: {lat: 50.8168555, lng: -0.136738},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Palace_Pier&section=0&prop=text&format=json&callback=?",
			mainImage: {img: 'img/palace-pier/16712529701_647a6f2cb7_q.jpg', attrib: '',},
			images: ['img/palace-pier/1013795516_63de524d2f_q.jpg', 'img/palace-pier/16712529701_647a6f2cb7_q.jpg', 'img/palace-pier/1012935875_0819ad12d9_q.jpg', 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', 'img/palace-pier/11422095636_42781da5c7_q.jpg', 'img/palace-pier/17537667234_405b66e6c3_q.jpg']
		},
		{
			name: "The West Pier",
			location: {lat: 50.8190545, lng: -0.1519598},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=West_Pier&section=0&prop=text&format=json&callback=?",
			mainImage: {img: 'img/west-pier/33528982172_e567f1d0d4_q.jpg', attrib: '',},
			images: ['img/west-pier/394504492_cc09843c57_q.jpg', 'img/west-pier/5629808414_7069fde68b_q.jpg', 'img/west-pier/5967760435_c25838b65a_q.jpg', 'img/west-pier/7584224040_0136934031_q.jpg', 'img/west-pier/16474088376_f0aacc4138_q.jpg', 'img/west-pier/33528982172_e567f1d0d4_q.jpg']
		},
		{
			name: "The i360",
			location: {lat: 50.821439, lng: -0.150754},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=British_Airways_i360&section=0&prop=text&format=json&callback=?",
			mainImage: {img: 'img/i360/29482583831_68fbc62c95_q.jpg', attrib: '',},
			images: ['img/i360/29482583831_68fbc62c95_q.jpg', 'img/i360/30219857810_18dd92dfb8_q.jpg', 'img/i360/30518153195_79aa8d460a_q.jpg', 'img/i360/31803543046_6f694b9216_q.jpg', 'img/i360/32172673813_e3d512a1b5_q.jpg', 'img/i360/33125713276_d060058ea7_q.jpg']
		},
		{
			name: "The Brighton Wheel",
			location: {lat: 50.8191078, lng: -0.1343941},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Wheel&section=0&prop=text&format=json&callback=?",
			mainImage: {img: 'img/wheel/6220401503_09f84eccfe_q.jpg', attrib: '',},
			images: ['img/wheel/8717901362_48cfeb14e7_q.jpg', 'img/wheel/6220401503_09f84eccfe_q.jpg', 'img/wheel/6404242061_f705d146f8_q.jpg', 'img/wheel/6890339892_ec45b60a79_q.jpg', 'img/wheel/8503870944_3cb8c8b922_q.jpg', 'img/wheel/14292530155_7da7988640_q.jpg']
		}
	]},
	{
	area: "downs",
	areaImages: [],
	locations: [
		{
			name: "Devils Dyke",
			location: {lat: 50.8826218, lng: -0.2089273},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		},
		{
			name: "Ditchling Beacon",
			location: {lat: 50.9003315, lng: -0.1085077},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		}
	]},
	{
	area: "nightlife",
	areaImages: [],
	locations: [
		{
			name: "Concorde 2",
			location: {lat: 50.8173252, lng: -0.1252401},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		},
		{
			name: "Casablanca Jazz Club",
			location: {lat: 50.8209047, lng: -0.1455632},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		},
		{
			name: "Green Door Store",
			location: {lat: 50.8293094, lng: -0.1424677},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		},
		{
			name: "Patterns (formally Audio)",
			location: {lat: 50.8200005, lng: -0.1373349},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		},
		{
			name: "The Volks",
			location: {lat: 50.8192982, lng: -0.1350255},
			wiki: '',
			mainImage: {img: '', attrib: '',},
			images: []
		}
	]}
];

/////////////////////  VIEWMODEL ///////////////////////////////

var ViewModel = function(){

	var self = this;

	this.markers = [];

	// Makes my model data observable and useable by the view via the ViewModel.
	this.poiList = ko.observableArray([]); // observable array of objects

	// Populate the observable array 
	poi.forEach(function(object){
		self.poiList.push(object);
	});

	this.selectedCategory = ko.observable();

	this.clickCategory = function(clicked){
		self.selectedCategory(clicked);
	};

	// Observe when the selectedCategory changes and call the showMarkers and showPhotos function for that area
	this.selectedCategory.subscribe(function(){
		self.showMarkers(self.selectedCategory().area);
		self.showPhotos(self.selectedCategory());
		console.log(self.selectedCategory());
	});

	this.showMarkers = function(findArea) {

		// Clear all markers
		for (var i=0; i<self.markers.length; i++){
			self.markers[i].setMap(null);
		};
		// Clear array - not strictly necessary but array would eventually get clogged up with markers
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
                    });

				});
			}
		});

		self.map.fitBounds(bounds);

	};

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

	this.populateImageArea = function (marker, imagesArray){
		$('#imageDisplay').empty();
		for (var i=0; i<imagesArray.length; i++){
			$('#imageDisplay').append('<figure><img src="'+imagesArray[i].img+'" alt="image of '+marker.title+'"><figcaption class="attrib"><a href="'+marker.attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
		};
	};
	
	this.showPhotos = function (object) {
		$('#imageDisplay').empty();
		for (var i=0; i<object.areaImages.length; i++){
			$('#imageDisplay').append('<figure><img src="'+object.areaImages[i].img+'" alt="image of '+object.area+'"><figcaption class="attrib"><a href="'+object.areaImages[i].attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
		};
	}

	// this.loadWiki = function (argument) {
	// 	var $wikiElem = $('#wikipedia-links');
	// 	// clear out old data before new request
	//     $wikiElem.text("");
	//     // load Wikipedia articles via AJAX request and JSON-P to get round CORS
	//     var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';

	//     var wikiRequestTimeout = setTimeout(function(){
	//         $wikiElem.text("failed to get Wikipedia resources");
	//     }, 8000);

	//     $.ajax({
	// 	    type: "GET",
	// 	    url: "",
	// 	    contentType: "application/json; charset=utf-8",
	// 	    async: true,
	// 	    dataType: "json",
	// 	    success: function (data, textStatus, jqXHR) {

	// 	        var markup = data.parse.text["*"];
	// 	        var blurb = $('<div></div>').html(markup);
	// 	        $('#article').html($(blurb).find('p'));

	// 	    },
	// 	    clearTimeout(wikiRequestTimeout);
	// 	})
	// 	return false;
	// };

	this.init = function() {

		self.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.827022, lng: -0.158278},
            zoom: 12
        });
       
        self.smallInfowindow = new google.maps.InfoWindow();

        // Initially call showMarkers with filter as empty
        self.showMarkers(null);
	};
};

// Variable can be accessed easily from outside of this object
var vm = new ViewModel();
ko.applyBindings(vm);

// SOMEWAY TO LOAD THE LOADWIKI (Was loadData function in example)
// $('#form-container').submit(loadData);

