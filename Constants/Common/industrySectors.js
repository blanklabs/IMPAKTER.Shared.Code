const subIndustries = [
    {
        "code": "1110",
        "section": "A",
        "description": "Growing of cereals (except rice), leguminous crops and oil seeds"
    },
    {
        "code": "1120",
        "section": "A",
        "description": "Growing of rice"
    },
    {
        "code": "1130",
        "section": "A",
        "description": "Growing of vegetables and melons, roots and tubers"
    },
    {
        "code": "1140",
        "section": "A",
        "description": "Growing of sugar cane"
    },
    {
        "code": "1150",
        "section": "A",
        "description": "Growing of tobacco"
    },
    {
        "code": "1160",
        "section": "A",
        "description": "Growing of fibre crops"
    },
    {
        "code": "1190",
        "section": "A",
        "description": "Growing of other non:perennial crops"
    },
    {
        "code": "1210",
        "section": "A",
        "description": "Growing of grapes"
    },
    {
        "code": "1220",
        "section": "A",
        "description": "Growing of tropical and subtropical fruits"
    },
    {
        "code": "1230",
        "section": "A",
        "description": "Growing of citrus fruits"
    },
    {
        "code": "1240",
        "section": "A",
        "description": "Growing of pome fruits and stone fruits"
    },
    {
        "code": "1250",
        "section": "A",
        "description": "Growing of other tree and bush fruits and nuts"
    },
    {
        "code": "1260",
        "section": "A",
        "description": "Growing of oleaginous fruits"
    },
    {
        "code": "1270",
        "section": "A",
        "description": "Growing of beverage crops"
    },
    {
        "code": "1280",
        "section": "A",
        "description": "Growing of spices, aromatic, drug and pharmaceutical crops"
    },
    {
        "code": "1290",
        "section": "A",
        "description": "Growing of other perennial crops"
    },
    {
        "code": "1300",
        "section": "A",
        "description": "Plant propagation"
    },
    {
        "code": "1410",
        "section": "A",
        "description": "Raising of dairy cattle"
    },
    {
        "code": "1420",
        "section": "A",
        "description": "Raising of other cattle and buffaloes"
    },
    {
        "code": "1430",
        "section": "A",
        "description": "Raising of horses and other equines"
    },
    {
        "code": "1440",
        "section": "A",
        "description": "Raising of camels and camelids"
    },
    {
        "code": "1450",
        "section": "A",
        "description": "Raising of sheep and goats"
    },
    {
        "code": "1460",
        "section": "A",
        "description": "Raising of swine/pigs"
    },
    {
        "code": "1470",
        "section": "A",
        "description": "Raising of poultry"
    },
    {
        "code": "1490",
        "section": "A",
        "description": "Raising of other animals"
    },
    {
        "code": "1500",
        "section": "A",
        "description": "Mixed farming"
    },
    {
        "code": "1610",
        "section": "A",
        "description": "Support activities for crop production"
    },
    {
        "code": "1621",
        "section": "A",
        "description": "Farm animal boarding and care"
    },
    {
        "code": "1629",
        "section": "A",
        "description": "Support activities for animal production (other than farm animal boarding and care) n.e.c."
    },
    {
        "code": "1630",
        "section": "A",
        "description": "Post:harvest crop activities"
    },
    {
        "code": "1640",
        "section": "A",
        "description": "Seed processing for propagation"
    },
    {
        "code": "1700",
        "section": "A",
        "description": "Hunting, trapping and related service activities"
    },
    {
        "code": "2100",
        "section": "A",
        "description": "Silviculture and other forestry activities"
    },
    {
        "code": "2200",
        "section": "A",
        "description": "Logging"
    },
    {
        "code": "2300",
        "section": "A",
        "description": "Gathering of wild growing non:wood products"
    },
    {
        "code": "2400",
        "section": "A",
        "description": "Support services to forestry"
    },
    {
        "code": "3110",
        "section": "A",
        "description": "Marine fishing"
    },
    {
        "code": "3120",
        "section": "A",
        "description": "Freshwater fishing"
    },
    {
        "code": "3210",
        "section": "A",
        "description": "Marine aquaculture"
    },
    {
        "code": "3220",
        "section": "A",
        "description": "Freshwater aquaculture"
    },
    {
        "code": "5101",
        "section": "B",
        "description": "Deep coal mines"
    },
    {
        "code": "5102",
        "section": "B",
        "description": "Open cast coal working"
    },
    {
        "code": "5200",
        "section": "B",
        "description": "Mining of lignite"
    },
    {
        "code": "6100",
        "section": "B",
        "description": "Extraction of crude petroleum"
    },
    {
        "code": "6200",
        "section": "B",
        "description": "Extraction of natural gas"
    },
    {
        "code": "7100",
        "section": "B",
        "description": "Mining of iron ores"
    },
    {
        "code": "7210",
        "section": "B",
        "description": "Mining of uranium and thorium ores"
    },
    {
        "code": "7290",
        "section": "B",
        "description": "Mining of other non:ferrous metal ores"
    },
    {
        "code": "8110",
        "section": "B",
        "description": "Quarrying of ornamental and building stone, limestone, gypsum, chalk and slate"
    },
    {
        "code": "8120",
        "section": "B",
        "description": "Operation of gravel and sand pits; mining of clays and kaolin"
    },
    {
        "code": "8910",
        "section": "B",
        "description": "Mining of chemical and fertilizer minerals"
    },
    {
        "code": "8920",
        "section": "B",
        "description": "Extraction of peat"
    },
    {
        "code": "8930",
        "section": "B",
        "description": "Extraction of salt"
    },
    {
        "code": "8990",
        "section": "B",
        "description": "Other mining and quarrying n.e.c."
    },
    {
        "code": "9100",
        "section": "B",
        "description": "Support activities for petroleum and natural gas mining"
    },
    {
        "code": "9900",
        "section": "B",
        "description": "Support activities for other mining and quarrying"
    },
    {
        "code": "10110",
        "section": "C",
        "description": "Processing and preserving of meat"
    },
    {
        "code": "10120",
        "section": "C",
        "description": "Processing and preserving of poultry meat"
    },
    {
        "code": "10130",
        "section": "C",
        "description": "Production of meat and poultry meat products"
    },
    {
        "code": "10200",
        "section": "C",
        "description": "Processing and preserving of fish, crustaceans and molluscs"
    },
    {
        "code": "10310",
        "section": "C",
        "description": "Processing and preserving of potatoes"
    },
    {
        "code": "10320",
        "section": "C",
        "description": "Manufacture of fruit and vegetable juice"
    },
    {
        "code": "10390",
        "section": "C",
        "description": "Other processing and preserving of fruit and vegetables"
    },
    {
        "code": "10410",
        "section": "C",
        "description": "Manufacture of oils and fats"
    },
    {
        "code": "10420",
        "section": "C",
        "description": "Manufacture of margarine and similar edible fats"
    },
    {
        "code": "10511",
        "section": "C",
        "description": "Liquid milk and cream production"
    },
    {
        "code": "10512",
        "section": "C",
        "description": "Butter and cheese production"
    },
    {
        "code": "10519",
        "section": "C",
        "description": "Manufacture of other milk products"
    },
    {
        "code": "10520",
        "section": "C",
        "description": "Manufacture of ice cream"
    },
    {
        "code": "10611",
        "section": "C",
        "description": "Grain milling"
    },
    {
        "code": "10612",
        "section": "C",
        "description": "Manufacture of breakfast cereals and cereals:based food"
    },
    {
        "code": "10620",
        "section": "C",
        "description": "Manufacture of starches and starch products"
    },
    {
        "code": "10710",
        "section": "C",
        "description": "Manufacture of bread; manufacture of fresh pastry goods and cakes"
    },
    {
        "code": "10720",
        "section": "C",
        "description": "Manufacture of rusks and biscuits; manufacture of preserved pastry goods and cakes"
    },
    {
        "code": "10730",
        "section": "C",
        "description": "Manufacture of macaroni, noodles, couscous and similar farinaceous products"
    },
    {
        "code": "10810",
        "section": "C",
        "description": "Manufacture of sugar"
    },
    {
        "code": "10821",
        "section": "C",
        "description": "Manufacture of cocoa and chocolate confectionery"
    },
    {
        "code": "10822",
        "section": "C",
        "description": "Manufacture of sugar confectionery"
    },
    {
        "code": "10831",
        "section": "C",
        "description": "Tea processing"
    },
    {
        "code": "10832",
        "section": "C",
        "description": "Production of coffee and coffee substitutes"
    },
    {
        "code": "10840",
        "section": "C",
        "description": "Manufacture of condiments and seasonings"
    },
    {
        "code": "10850",
        "section": "C",
        "description": "Manufacture of prepared meals and dishes"
    },
    {
        "code": "10860",
        "section": "C",
        "description": "Manufacture of homogenized food preparations and dietetic food"
    },
    {
        "code": "10890",
        "section": "C",
        "description": "Manufacture of other food products n.e.c."
    },
    {
        "code": "10910",
        "section": "C",
        "description": "Manufacture of prepared feeds for farm animals"
    },
    {
        "code": "10920",
        "section": "C",
        "description": "Manufacture of prepared pet foods"
    },
    {
        "code": "11010",
        "section": "C",
        "description": "Distilling, rectifying and blending of spirits"
    },
    {
        "code": "11020",
        "section": "C",
        "description": "Manufacture of wine from grape"
    },
    {
        "code": "11030",
        "section": "C",
        "description": "Manufacture of cider and other fruit wines"
    },
    {
        "code": "11040",
        "section": "C",
        "description": "Manufacture of other non:distilled fermented beverages"
    },
    {
        "code": "11050",
        "section": "C",
        "description": "Manufacture of beer"
    },
    {
        "code": "11060",
        "section": "C",
        "description": "Manufacture of malt"
    },
    {
        "code": "11070",
        "section": "C",
        "description": "Manufacture of soft drinks; production of mineral waters and other bottled waters"
    },
    {
        "code": "12000",
        "section": "C",
        "description": "Manufacture of tobacco products"
    },
    {
        "code": "13100",
        "section": "C",
        "description": "Preparation and spinning of textile fibres"
    },
    {
        "code": "13200",
        "section": "C",
        "description": "Weaving of textiles"
    },
    {
        "code": "13300",
        "section": "C",
        "description": "Finishing of textiles"
    },
    {
        "code": "13910",
        "section": "C",
        "description": "Manufacture of knitted and crocheted fabrics"
    },
    {
        "code": "13921",
        "section": "C",
        "description": "Manufacture of soft furnishings"
    },
    {
        "code": "13922",
        "section": "C",
        "description": "manufacture of canvas goods, sacks, etc."
    },
    {
        "code": "13923",
        "section": "C",
        "description": "manufacture of household textiles"
    },
    {
        "code": "13931",
        "section": "C",
        "description": "Manufacture of woven or tufted carpets and rugs"
    },
    {
        "code": "13939",
        "section": "C",
        "description": "Manufacture of other carpets and rugs"
    },
    {
        "code": "13940",
        "section": "C",
        "description": "Manufacture of cordage, rope, twine and netting"
    },
    {
        "code": "13950",
        "section": "C",
        "description": "Manufacture of non:wovens and articles made from non:wovens, except apparel"
    },
    {
        "code": "13960",
        "section": "C",
        "description": "Manufacture of other technical and industrial textiles"
    },
    {
        "code": "13990",
        "section": "C",
        "description": "Manufacture of other textiles n.e.c."
    },
    {
        "code": "14110",
        "section": "C",
        "description": "Manufacture of leather clothes"
    },
    {
        "code": "14120",
        "section": "C",
        "description": "Manufacture of workwear"
    },
    {
        "code": "14131",
        "section": "C",
        "description": "Manufacture of other men's outerwear"
    },
    {
        "code": "14132",
        "section": "C",
        "description": "Manufacture of other women's outerwear"
    },
    {
        "code": "14141",
        "section": "C",
        "description": "Manufacture of men's underwear"
    },
    {
        "code": "14142",
        "section": "C",
        "description": "Manufacture of women's underwear"
    },
    {
        "code": "14190",
        "section": "C",
        "description": "Manufacture of other wearing apparel and accessories n.e.c."
    },
    {
        "code": "14200",
        "section": "C",
        "description": "Manufacture of articles of fur"
    },
    {
        "code": "14310",
        "section": "C",
        "description": "Manufacture of knitted and crocheted hosiery"
    },
    {
        "code": "14390",
        "section": "C",
        "description": "Manufacture of other knitted and crocheted apparel"
    },
    {
        "code": "15110",
        "section": "C",
        "description": "Tanning and dressing of leather; dressing and dyeing of fur"
    },
    {
        "code": "15120",
        "section": "C",
        "description": "Manufacture of luggage, handbags and the like, saddlery and harness"
    },
    {
        "code": "15200",
        "section": "C",
        "description": "Manufacture of footwear"
    },
    {
        "code": "16100",
        "section": "C",
        "description": "Sawmilling and planing of wood"
    },
    {
        "code": "16210",
        "section": "C",
        "description": "Manufacture of veneer sheets and wood:based panels"
    },
    {
        "code": "16220",
        "section": "C",
        "description": "Manufacture of assembled parquet floors"
    },
    {
        "code": "16230",
        "section": "C",
        "description": "Manufacture of other builders' carpentry and joinery"
    },
    {
        "code": "16240",
        "section": "C",
        "description": "Manufacture of wooden containers"
    },
    {
        "code": "16290",
        "section": "C",
        "description": "Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials"
    },
    {
        "code": "17110",
        "section": "C",
        "description": "Manufacture of pulp"
    },
    {
        "code": "17120",
        "section": "C",
        "description": "Manufacture of paper and paperboard"
    },
    {
        "code": "17211",
        "section": "C",
        "description": "Manufacture of corrugated paper and paperboard, sacks and bags"
    },
    {
        "code": "17219",
        "section": "C",
        "description": "Manufacture of other paper and paperboard containers"
    },
    {
        "code": "17220",
        "section": "C",
        "description": "Manufacture of household and sanitary goods and of toilet requisites"
    },
    {
        "code": "17230",
        "section": "C",
        "description": "Manufacture of paper stationery"
    },
    {
        "code": "17240",
        "section": "C",
        "description": "Manufacture of wallpaper"
    },
    {
        "code": "17290",
        "section": "C",
        "description": "Manufacture of other articles of paper and paperboard n.e.c."
    },
    {
        "code": "18110",
        "section": "C",
        "description": "Printing of newspapers"
    },
    {
        "code": "18121",
        "section": "C",
        "description": "Manufacture of printed labels"
    },
    {
        "code": "18129",
        "section": "C",
        "description": "Printing n.e.c."
    },
    {
        "code": "18130",
        "section": "C",
        "description": "Pre:press and pre:media services"
    },
    {
        "code": "18140",
        "section": "C",
        "description": "Binding and related services"
    },
    {
        "code": "18201",
        "section": "C",
        "description": "Reproduction of sound recording"
    },
    {
        "code": "18202",
        "section": "C",
        "description": "Reproduction of video recording"
    },
    {
        "code": "18203",
        "section": "C",
        "description": "Reproduction of computer media"
    },
    {
        "code": "19100",
        "section": "C",
        "description": "Manufacture of coke oven products"
    },
    {
        "code": "19201",
        "section": "C",
        "description": "Mineral oil refining"
    },
    {
        "code": "19209",
        "section": "C",
        "description": "Other treatment of petroleum products (excluding petrochemicals manufacture)"
    },
    {
        "code": "20110",
        "section": "C",
        "description": "Manufacture of industrial gases"
    },
    {
        "code": "20120",
        "section": "C",
        "description": "Manufacture of dyes and pigments"
    },
    {
        "code": "20130",
        "section": "C",
        "description": "Manufacture of other inorganic basic chemicals"
    },
    {
        "code": "20140",
        "section": "C",
        "description": "Manufacture of other organic basic chemicals"
    },
    {
        "code": "20150",
        "section": "C",
        "description": "Manufacture of fertilizers and nitrogen compounds"
    },
    {
        "code": "20160",
        "section": "C",
        "description": "Manufacture of plastics in primary forms"
    },
    {
        "code": "20170",
        "section": "C",
        "description": "Manufacture of synthetic rubber in primary forms"
    },
    {
        "code": "20200",
        "section": "C",
        "description": "Manufacture of pesticides and other agrochemical products"
    },
    {
        "code": "20301",
        "section": "C",
        "description": "Manufacture of paints, varnishes and similar coatings, mastics and sealants"
    },
    {
        "code": "20302",
        "section": "C",
        "description": "Manufacture of printing ink"
    },
    {
        "code": "20411",
        "section": "C",
        "description": "Manufacture of soap and detergents"
    },
    {
        "code": "20412",
        "section": "C",
        "description": "Manufacture of cleaning and polishing preparations"
    },
    {
        "code": "20420",
        "section": "C",
        "description": "Manufacture of perfumes and toilet preparations"
    },
    {
        "code": "20510",
        "section": "C",
        "description": "Manufacture of explosives"
    },
    {
        "code": "20520",
        "section": "C",
        "description": "Manufacture of glues"
    },
    {
        "code": "20530",
        "section": "C",
        "description": "Manufacture of essential oils"
    },
    {
        "code": "20590",
        "section": "C",
        "description": "Manufacture of other chemical products n.e.c."
    },
    {
        "code": "20600",
        "section": "C",
        "description": "Manufacture of man:made fibres"
    },
    {
        "code": "21100",
        "section": "C",
        "description": "Manufacture of basic pharmaceutical products"
    },
    {
        "code": "21200",
        "section": "C",
        "description": "Manufacture of pharmaceutical preparations"
    },
    {
        "code": "22110",
        "section": "C",
        "description": "Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres"
    },
    {
        "code": "22190",
        "section": "C",
        "description": "Manufacture of other rubber products"
    },
    {
        "code": "22210",
        "section": "C",
        "description": "Manufacture of plastic plates, sheets, tubes and profiles"
    },
    {
        "code": "22220",
        "section": "C",
        "description": "Manufacture of plastic packing goods"
    },
    {
        "code": "22230",
        "section": "C",
        "description": "Manufacture of builders ware of plastic"
    },
    {
        "code": "22290",
        "section": "C",
        "description": "Manufacture of other plastic products"
    },
    {
        "code": "23110",
        "section": "C",
        "description": "Manufacture of flat glass"
    },
    {
        "code": "23120",
        "section": "C",
        "description": "Shaping and processing of flat glass"
    },
    {
        "code": "23130",
        "section": "C",
        "description": "Manufacture of hollow glass"
    },
    {
        "code": "23140",
        "section": "C",
        "description": "Manufacture of glass fibres"
    },
    {
        "code": "23190",
        "section": "C",
        "description": "Manufacture and processing of other glass, including technical glassware"
    },
    {
        "code": "23200",
        "section": "C",
        "description": "Manufacture of refractory products"
    },
    {
        "code": "23310",
        "section": "C",
        "description": "Manufacture of ceramic tiles and flags"
    },
    {
        "code": "23320",
        "section": "C",
        "description": "Manufacture of bricks, tiles and construction products, in baked clay"
    },
    {
        "code": "23410",
        "section": "C",
        "description": "Manufacture of ceramic household and ornamental articles"
    },
    {
        "code": "23420",
        "section": "C",
        "description": "Manufacture of ceramic sanitary fixtures"
    },
    {
        "code": "23430",
        "section": "C",
        "description": "Manufacture of ceramic insulators and insulating fittings"
    },
    {
        "code": "23440",
        "section": "C",
        "description": "Manufacture of other technical ceramic products"
    },
    {
        "code": "23490",
        "section": "C",
        "description": "Manufacture of other ceramic products n.e.c."
    },
    {
        "code": "23510",
        "section": "C",
        "description": "Manufacture of cement"
    },
    {
        "code": "23520",
        "section": "C",
        "description": "Manufacture of lime and plaster"
    },
    {
        "code": "23610",
        "section": "C",
        "description": "Manufacture of concrete products for construction purposes"
    },
    {
        "code": "23620",
        "section": "C",
        "description": "Manufacture of plaster products for construction purposes"
    },
    {
        "code": "23630",
        "section": "C",
        "description": "Manufacture of ready:mixed concrete"
    },
    {
        "code": "23640",
        "section": "C",
        "description": "Manufacture of mortars"
    },
    {
        "code": "23650",
        "section": "C",
        "description": "Manufacture of fibre cement"
    },
    {
        "code": "23690",
        "section": "C",
        "description": "Manufacture of other articles of concrete, plaster and cement"
    },
    {
        "code": "23700",
        "section": "C",
        "description": "Cutting, shaping and finishing of stone"
    },
    {
        "code": "23910",
        "section": "C",
        "description": "Production of abrasive products"
    },
    {
        "code": "23990",
        "section": "C",
        "description": "Manufacture of other non:metallic mineral products n.e.c."
    },
    {
        "code": "24100",
        "section": "C",
        "description": "Manufacture of basic iron and steel and of ferro:alloys"
    },
    {
        "code": "24200",
        "section": "C",
        "description": "Manufacture of tubes, pipes, hollow profiles and related fittings, of steel"
    },
    {
        "code": "24310",
        "section": "C",
        "description": "Cold drawing of bars"
    },
    {
        "code": "24320",
        "section": "C",
        "description": "Cold rolling of narrow strip"
    },
    {
        "code": "24330",
        "section": "C",
        "description": "Cold forming or folding"
    },
    {
        "code": "24340",
        "section": "C",
        "description": "Cold drawing of wire"
    },
    {
        "code": "24410",
        "section": "C",
        "description": "Precious metals production"
    },
    {
        "code": "24420",
        "section": "C",
        "description": "Aluminium production"
    },
    {
        "code": "24430",
        "section": "C",
        "description": "Lead, zinc and tin production"
    },
    {
        "code": "24440",
        "section": "C",
        "description": "Copper production"
    },
    {
        "code": "24450",
        "section": "C",
        "description": "Other non:ferrous metal production"
    },
    {
        "code": "24460",
        "section": "C",
        "description": "Processing of nuclear fuel"
    },
    {
        "code": "24510",
        "section": "C",
        "description": "Casting of iron"
    },
    {
        "code": "24520",
        "section": "C",
        "description": "Casting of steel"
    },
    {
        "code": "24530",
        "section": "C",
        "description": "Casting of light metals"
    },
    {
        "code": "24540",
        "section": "C",
        "description": "Casting of other non:ferrous metals"
    },
    {
        "code": "25110",
        "section": "C",
        "description": "Manufacture of metal structures and parts of structures"
    },
    {
        "code": "25120",
        "section": "C",
        "description": "Manufacture of doors and windows of metal"
    },
    {
        "code": "25210",
        "section": "C",
        "description": "Manufacture of central heating radiators and boilers"
    },
    {
        "code": "25290",
        "section": "C",
        "description": "Manufacture of other tanks, reservoirs and containers of metal"
    },
    {
        "code": "25300",
        "section": "C",
        "description": "Manufacture of steam generators, except central heating hot water boilers"
    },
    {
        "code": "25400",
        "section": "C",
        "description": "Manufacture of weapons and ammunition"
    },
    {
        "code": "25500",
        "section": "C",
        "description": "Forging, pressing, stamping and roll:forming of metal; powder metallurgy"
    },
    {
        "code": "25610",
        "section": "C",
        "description": "Treatment and coating of metals"
    },
    {
        "code": "25620",
        "section": "C",
        "description": "Machining"
    },
    {
        "code": "25710",
        "section": "C",
        "description": "Manufacture of cutlery"
    },
    {
        "code": "25720",
        "section": "C",
        "description": "Manufacture of locks and hinges"
    },
    {
        "code": "25730",
        "section": "C",
        "description": "Manufacture of tools"
    },
    {
        "code": "25910",
        "section": "C",
        "description": "Manufacture of steel drums and similar containers"
    },
    {
        "code": "25920",
        "section": "C",
        "description": "Manufacture of light metal packaging"
    },
    {
        "code": "25930",
        "section": "C",
        "description": "Manufacture of wire products, chain and springs"
    },
    {
        "code": "25940",
        "section": "C",
        "description": "Manufacture of fasteners and screw machine products"
    },
    {
        "code": "25990",
        "section": "C",
        "description": "Manufacture of other fabricated metal products n.e.c."
    },
    {
        "code": "26110",
        "section": "C",
        "description": "Manufacture of electronic components"
    },
    {
        "code": "26120",
        "section": "C",
        "description": "Manufacture of loaded electronic boards"
    },
    {
        "code": "26200",
        "section": "C",
        "description": "Manufacture of computers and peripheral equipment"
    },
    {
        "code": "26301",
        "section": "C",
        "description": "Manufacture of telegraph and telephone apparatus and equipment"
    },
    {
        "code": "26309",
        "section": "C",
        "description": "Manufacture of communication equipment other than telegraph, and telephone apparatus and equipment"
    },
    {
        "code": "26400",
        "section": "C",
        "description": "Manufacture of consumer electronics"
    },
    {
        "code": "26511",
        "section": "C",
        "description": "Manufacture of electronic measuring, testing etc. equipment, not for industrial process control"
    },
    {
        "code": "26512",
        "section": "C",
        "description": "Manufacture of electronic industrial process control equipment"
    },
    {
        "code": "26513",
        "section": "C",
        "description": "Manufacture of non:electronic measuring, testing etc. equipment, not for industrial process control"
    },
    {
        "code": "26514",
        "section": "C",
        "description": "Manufacture of non:electronic industrial process control equipment"
    },
    {
        "code": "26520",
        "section": "C",
        "description": "Manufacture of watches and clocks"
    },
    {
        "code": "26600",
        "section": "C",
        "description": "Manufacture of irradiation, electromedical and electrotherapeutic equipment"
    },
    {
        "code": "26701",
        "section": "C",
        "description": "Manufacture of optical precision instruments"
    },
    {
        "code": "26702",
        "section": "C",
        "description": "Manufacture of photographic and cinematographic equipment"
    },
    {
        "code": "26800",
        "section": "C",
        "description": "Manufacture of magnetic and optical media"
    },
    {
        "code": "27110",
        "section": "C",
        "description": "Manufacture of electric motors, generators and transformers"
    },
    {
        "code": "27120",
        "section": "C",
        "description": "Manufacture of electricity distribution and control apparatus"
    },
    {
        "code": "27200",
        "section": "C",
        "description": "Manufacture of batteries and accumulators"
    },
    {
        "code": "27310",
        "section": "C",
        "description": "Manufacture of fibre optic cables"
    },
    {
        "code": "27320",
        "section": "C",
        "description": "Manufacture of other electronic and electric wires and cables"
    },
    {
        "code": "27330",
        "section": "C",
        "description": "Manufacture of wiring devices"
    },
    {
        "code": "27400",
        "section": "C",
        "description": "Manufacture of electric lighting equipment"
    },
    {
        "code": "27510",
        "section": "C",
        "description": "Manufacture of electric domestic appliances"
    },
    {
        "code": "27520",
        "section": "C",
        "description": "Manufacture of non:electric domestic appliances"
    },
    {
        "code": "27900",
        "section": "C",
        "description": "Manufacture of other electrical equipment"
    },
    {
        "code": "28110",
        "section": "C",
        "description": "Manufacture of engines and turbines, except aircraft, vehicle and cycle engines"
    },
    {
        "code": "28120",
        "section": "C",
        "description": "Manufacture of fluid power equipment"
    },
    {
        "code": "28131",
        "section": "C",
        "description": "Manufacture of pumps"
    },
    {
        "code": "28132",
        "section": "C",
        "description": "Manufacture of compressors"
    },
    {
        "code": "28140",
        "section": "C",
        "description": "Manufacture of taps and valves"
    },
    {
        "code": "28150",
        "section": "C",
        "description": "Manufacture of bearings, gears, gearing and driving elements"
    },
    {
        "code": "28210",
        "section": "C",
        "description": "Manufacture of ovens, furnaces and furnace burners"
    },
    {
        "code": "28220",
        "section": "C",
        "description": "Manufacture of lifting and handling equipment"
    },
    {
        "code": "28230",
        "section": "C",
        "description": "Manufacture of office machinery and equipment (except computers and peripheral equipment)"
    },
    {
        "code": "28240",
        "section": "C",
        "description": "Manufacture of power:driven hand tools"
    },
    {
        "code": "28250",
        "section": "C",
        "description": "Manufacture of non:domestic cooling and ventilation equipment"
    },
    {
        "code": "28290",
        "section": "C",
        "description": "Manufacture of other general:purpose machinery n.e.c."
    },
    {
        "code": "28301",
        "section": "C",
        "description": "Manufacture of agricultural tractors"
    },
    {
        "code": "28302",
        "section": "C",
        "description": "Manufacture of agricultural and forestry machinery other than tractors"
    },
    {
        "code": "28410",
        "section": "C",
        "description": "Manufacture of metal forming machinery"
    },
    {
        "code": "28490",
        "section": "C",
        "description": "Manufacture of other machine tools"
    },
    {
        "code": "28910",
        "section": "C",
        "description": "Manufacture of machinery for metallurgy"
    },
    {
        "code": "28921",
        "section": "C",
        "description": "Manufacture of machinery for mining"
    },
    {
        "code": "28922",
        "section": "C",
        "description": "Manufacture of earthmoving equipment"
    },
    {
        "code": "28923",
        "section": "C",
        "description": "Manufacture of equipment for concrete crushing and screening and roadworks"
    },
    {
        "code": "28930",
        "section": "C",
        "description": "Manufacture of machinery for food, beverage and tobacco processing"
    },
    {
        "code": "28940",
        "section": "C",
        "description": "Manufacture of machinery for textile, apparel and leather production"
    },
    {
        "code": "28950",
        "section": "C",
        "description": "Manufacture of machinery for paper and paperboard production"
    },
    {
        "code": "28960",
        "section": "C",
        "description": "Manufacture of plastics and rubber machinery"
    },
    {
        "code": "28990",
        "section": "C",
        "description": "Manufacture of other special:purpose machinery n.e.c."
    },
    {
        "code": "29100",
        "section": "C",
        "description": "Manufacture of motor vehicles"
    },
    {
        "code": "29201",
        "section": "C",
        "description": "Manufacture of bodies (coachwork) for motor vehicles (except caravans)"
    },
    {
        "code": "29202",
        "section": "C",
        "description": "Manufacture of trailers and semi:trailers"
    },
    {
        "code": "29203",
        "section": "C",
        "description": "Manufacture of caravans"
    },
    {
        "code": "29310",
        "section": "C",
        "description": "Manufacture of electrical and electronic equipment for motor vehicles and their engines"
    },
    {
        "code": "29320",
        "section": "C",
        "description": "Manufacture of other parts and accessories for motor vehicles"
    },
    {
        "code": "30110",
        "section": "C",
        "description": "Building of ships and floating structures"
    },
    {
        "code": "30120",
        "section": "C",
        "description": "Building of pleasure and sporting boats"
    },
    {
        "code": "30200",
        "section": "C",
        "description": "Manufacture of railway locomotives and rolling stock"
    },
    {
        "code": "30300",
        "section": "C",
        "description": "Manufacture of air and spacecraft and related machinery"
    },
    {
        "code": "30400",
        "section": "C",
        "description": "Manufacture of military fighting vehicles"
    },
    {
        "code": "30910",
        "section": "C",
        "description": "Manufacture of motorcycles"
    },
    {
        "code": "30920",
        "section": "C",
        "description": "Manufacture of bicycles and invalid carriages"
    },
    {
        "code": "30990",
        "section": "C",
        "description": "Manufacture of other transport equipment n.e.c."
    },
    {
        "code": "31010",
        "section": "C",
        "description": "Manufacture of office and shop furniture"
    },
    {
        "code": "31020",
        "section": "C",
        "description": "Manufacture of kitchen furniture"
    },
    {
        "code": "31030",
        "section": "C",
        "description": "Manufacture of mattresses"
    },
    {
        "code": "31090",
        "section": "C",
        "description": "Manufacture of other furniture"
    },
    {
        "code": "32110",
        "section": "C",
        "description": "Striking of coins"
    },
    {
        "code": "32120",
        "section": "C",
        "description": "Manufacture of jewellery and related articles"
    },
    {
        "code": "32130",
        "section": "C",
        "description": "Manufacture of imitation jewellery and related articles"
    },
    {
        "code": "32200",
        "section": "C",
        "description": "Manufacture of musical instruments"
    },
    {
        "code": "32300",
        "section": "C",
        "description": "Manufacture of sports goods"
    },
    {
        "code": "32401",
        "section": "C",
        "description": "Manufacture of professional and arcade games and toys"
    },
    {
        "code": "32409",
        "section": "C",
        "description": "Manufacture of other games and toys, n.e.c."
    },
    {
        "code": "32500",
        "section": "C",
        "description": "Manufacture of medical and dental instruments and supplies"
    },
    {
        "code": "32910",
        "section": "C",
        "description": "Manufacture of brooms and brushes"
    },
    {
        "code": "32990",
        "section": "C",
        "description": "Other manufacturing n.e.c."
    },
    {
        "code": "33110",
        "section": "C",
        "description": "Repair of fabricated metal products"
    },
    {
        "code": "33120",
        "section": "C",
        "description": "Repair of machinery"
    },
    {
        "code": "33130",
        "section": "C",
        "description": "Repair of electronic and optical equipment"
    },
    {
        "code": "33140",
        "section": "C",
        "description": "Repair of electrical equipment"
    },
    {
        "code": "33150",
        "section": "C",
        "description": "Repair and maintenance of ships and boats"
    },
    {
        "code": "33160",
        "section": "C",
        "description": "Repair and maintenance of aircraft and spacecraft"
    },
    {
        "code": "33170",
        "section": "C",
        "description": "Repair and maintenance of other transport equipment n.e.c."
    },
    {
        "code": "33190",
        "section": "C",
        "description": "Repair of other equipment"
    },
    {
        "code": "33200",
        "section": "C",
        "description": "Installation of industrial machinery and equipment"
    },
    {
        "code": "35110",
        "section": "D",
        "description": "Production of electricity"
    },
    {
        "code": "35120",
        "section": "D",
        "description": "Transmission of electricity"
    },
    {
        "code": "35130",
        "section": "D",
        "description": "Distribution of electricity"
    },
    {
        "code": "35140",
        "section": "D",
        "description": "Trade of electricity"
    },
    {
        "code": "35210",
        "section": "D",
        "description": "Manufacture of gas"
    },
    {
        "code": "35220",
        "section": "D",
        "description": "Distribution of gaseous fuels through mains"
    },
    {
        "code": "35230",
        "section": "D",
        "description": "Trade of gas through mains"
    },
    {
        "code": "35300",
        "section": "D",
        "description": "Steam and air conditioning supply"
    },
    {
        "code": "36000",
        "section": "E",
        "description": "Water collection, treatment and supply"
    },
    {
        "code": "37000",
        "section": "E",
        "description": "Sewerage"
    },
    {
        "code": "38110",
        "section": "E",
        "description": "Collection of non:hazardous waste"
    },
    {
        "code": "38120",
        "section": "E",
        "description": "Collection of hazardous waste"
    },
    {
        "code": "38210",
        "section": "E",
        "description": "Treatment and disposal of non:hazardous waste"
    },
    {
        "code": "38220",
        "section": "E",
        "description": "Treatment and disposal of hazardous waste"
    },
    {
        "code": "38310",
        "section": "E",
        "description": "Dismantling of wrecks"
    },
    {
        "code": "38320",
        "section": "E",
        "description": "Recovery of sorted materials"
    },
    {
        "code": "39000",
        "section": "E",
        "description": "Remediation activities and other waste management services"
    },
    {
        "code": "41100",
        "section": "F",
        "description": "Development of building projects"
    },
    {
        "code": "41201",
        "section": "F",
        "description": "Construction of commercial buildings"
    },
    {
        "code": "41202",
        "section": "F",
        "description": "Construction of domestic buildings"
    },
    {
        "code": "42110",
        "section": "F",
        "description": "Construction of roads and motorways"
    },
    {
        "code": "42120",
        "section": "F",
        "description": "Construction of railways and underground railways"
    },
    {
        "code": "42130",
        "section": "F",
        "description": "Construction of bridges and tunnels"
    },
    {
        "code": "42210",
        "section": "F",
        "description": "Construction of utility projects for fluids"
    },
    {
        "code": "42220",
        "section": "F",
        "description": "Construction of utility projects for electricity and telecommunications"
    },
    {
        "code": "42910",
        "section": "F",
        "description": "Construction of water projects"
    },
    {
        "code": "42990",
        "section": "F",
        "description": "Construction of other civil engineering projects n.e.c."
    },
    {
        "code": "43110",
        "section": "F",
        "description": "Demolition"
    },
    {
        "code": "43120",
        "section": "F",
        "description": "Site preparation"
    },
    {
        "code": "43130",
        "section": "F",
        "description": "Test drilling and boring"
    },
    {
        "code": "43210",
        "section": "F",
        "description": "Electrical installation"
    },
    {
        "code": "43220",
        "section": "F",
        "description": "Plumbing, heat and air:conditioning installation"
    },
    {
        "code": "43290",
        "section": "F",
        "description": "Other construction installation"
    },
    {
        "code": "43310",
        "section": "F",
        "description": "Plastering"
    },
    {
        "code": "43320",
        "section": "F",
        "description": "Joinery installation"
    },
    {
        "code": "43330",
        "section": "F",
        "description": "Floor and wall covering"
    },
    {
        "code": "43341",
        "section": "F",
        "description": "Painting"
    },
    {
        "code": "43342",
        "section": "F",
        "description": "Glazing"
    },
    {
        "code": "43390",
        "section": "F",
        "description": "Other building completion and finishing"
    },
    {
        "code": "43910",
        "section": "F",
        "description": "Roofing activities"
    },
    {
        "code": "43991",
        "section": "F",
        "description": "Scaffold erection"
    },
    {
        "code": "43999",
        "section": "F",
        "description": "Other specialised construction activities n.e.c."
    },
    {
        "code": "45111",
        "section": "G",
        "description": "Sale of new cars and light motor vehicles"
    },
    {
        "code": "45112",
        "section": "G",
        "description": "Sale of used cars and light motor vehicles"
    },
    {
        "code": "45190",
        "section": "G",
        "description": "Sale of other motor vehicles"
    },
    {
        "code": "45200",
        "section": "G",
        "description": "Maintenance and repair of motor vehicles"
    },
    {
        "code": "45310",
        "section": "G",
        "description": "Wholesale trade of motor vehicle parts and accessories"
    },
    {
        "code": "45320",
        "section": "G",
        "description": "Retail trade of motor vehicle parts and accessories"
    },
    {
        "code": "45400",
        "section": "G",
        "description": "Sale, maintenance and repair of motorcycles and related parts and accessories"
    },
    {
        "code": "46110",
        "section": "G",
        "description": "Agents selling agricultural raw materials, livestock, textile raw materials and semi:finished goods"
    },
    {
        "code": "46120",
        "section": "G",
        "description": "Agents involved in the sale of fuels, ores, metals and industrial chemicals"
    },
    {
        "code": "46130",
        "section": "G",
        "description": "Agents involved in the sale of timber and building materials"
    },
    {
        "code": "46140",
        "section": "G",
        "description": "Agents involved in the sale of machinery, industrial equipment, ships and aircraft"
    },
    {
        "code": "46150",
        "section": "G",
        "description": "Agents involved in the sale of furniture, household goods, hardware and ironmongery"
    },
    {
        "code": "46160",
        "section": "G",
        "description": "Agents involved in the sale of textiles, clothing, fur, footwear and leather goods"
    },
    {
        "code": "46170",
        "section": "G",
        "description": "Agents involved in the sale of food, beverages and tobacco"
    },
    {
        "code": "46180",
        "section": "G",
        "description": "Agents specialised in the sale of other particular products"
    },
    {
        "code": "46190",
        "section": "G",
        "description": "Agents involved in the sale of a variety of goods"
    },
    {
        "code": "46210",
        "section": "G",
        "description": "Wholesale of grain, unmanufactured tobacco, seeds and animal feeds"
    },
    {
        "code": "46220",
        "section": "G",
        "description": "Wholesale of flowers and plants"
    },
    {
        "code": "46230",
        "section": "G",
        "description": "Wholesale of live animals"
    },
    {
        "code": "46240",
        "section": "G",
        "description": "Wholesale of hides, skins and leather"
    },
    {
        "code": "46310",
        "section": "G",
        "description": "Wholesale of fruit and vegetables"
    },
    {
        "code": "46320",
        "section": "G",
        "description": "Wholesale of meat and meat products"
    },
    {
        "code": "46330",
        "section": "G",
        "description": "Wholesale of dairy products, eggs and edible oils and fats"
    },
    {
        "code": "46341",
        "section": "G",
        "description": "Wholesale of fruit and vegetable juices, mineral water and soft drinks"
    },
    {
        "code": "46342",
        "section": "G",
        "description": "Wholesale of wine, beer, spirits and other alcoholic beverages"
    },
    {
        "code": "46350",
        "section": "G",
        "description": "Wholesale of tobacco products"
    },
    {
        "code": "46360",
        "section": "G",
        "description": "Wholesale of sugar and chocolate and sugar confectionery"
    },
    {
        "code": "46370",
        "section": "G",
        "description": "Wholesale of coffee, tea, cocoa and spices"
    },
    {
        "code": "46380",
        "section": "G",
        "description": "Wholesale of other food, including fish, crustaceans and molluscs"
    },
    {
        "code": "46390",
        "section": "G",
        "description": "Non:specialised wholesale of food, beverages and tobacco"
    },
    {
        "code": "46410",
        "section": "G",
        "description": "Wholesale of textiles"
    },
    {
        "code": "46420",
        "section": "G",
        "description": "Wholesale of clothing and footwear"
    },
    {
        "code": "46431",
        "section": "G",
        "description": "Wholesale of audio tapes, records, CDs and video tapes and the equipment on which these are played"
    },
    {
        "code": "46439",
        "section": "G",
        "description": "Wholesale of radio, television goods &amp; electrical household appliances (other than records, tapes, CD's &amp; video tapes and the equipment used for playing them)"
    },
    {
        "code": "46440",
        "section": "G",
        "description": "Wholesale of china and glassware and cleaning materials"
    },
    {
        "code": "46450",
        "section": "G",
        "description": "Wholesale of perfume and cosmetics"
    },
    {
        "code": "46460",
        "section": "G",
        "description": "Wholesale of pharmaceutical goods"
    },
    {
        "code": "46470",
        "section": "G",
        "description": "Wholesale of furniture, carpets and lighting equipment"
    },
    {
        "code": "46480",
        "section": "G",
        "description": "Wholesale of watches and jewellery"
    },
    {
        "code": "46491",
        "section": "G",
        "description": "Wholesale of musical instruments"
    },
    {
        "code": "46499",
        "section": "G",
        "description": "Wholesale of household goods (other than musical instruments) n.e.c"
    },
    {
        "code": "46510",
        "section": "G",
        "description": "Wholesale of computers, computer peripheral equipment and software"
    },
    {
        "code": "46520",
        "section": "G",
        "description": "Wholesale of electronic and telecommunications equipment and parts"
    },
    {
        "code": "46610",
        "section": "G",
        "description": "Wholesale of agricultural machinery, equipment and supplies"
    },
    {
        "code": "46620",
        "section": "G",
        "description": "Wholesale of machine tools"
    },
    {
        "code": "46630",
        "section": "G",
        "description": "Wholesale of mining, construction and civil engineering machinery"
    },
    {
        "code": "46640",
        "section": "G",
        "description": "Wholesale of machinery for the textile industry and of sewing and knitting machines"
    },
    {
        "code": "46650",
        "section": "G",
        "description": "Wholesale of office furniture"
    },
    {
        "code": "46660",
        "section": "G",
        "description": "Wholesale of other office machinery and equipment"
    },
    {
        "code": "46690",
        "section": "G",
        "description": "Wholesale of other machinery and equipment"
    },
    {
        "code": "46711",
        "section": "G",
        "description": "Wholesale of petroleum and petroleum products"
    },
    {
        "code": "46719",
        "section": "G",
        "description": "Wholesale of other fuels and related products"
    },
    {
        "code": "46720",
        "section": "G",
        "description": "Wholesale of metals and metal ores"
    },
    {
        "code": "46730",
        "section": "G",
        "description": "Wholesale of wood, construction materials and sanitary equipment"
    },
    {
        "code": "46740",
        "section": "G",
        "description": "Wholesale of hardware, plumbing and heating equipment and supplies"
    },
    {
        "code": "46750",
        "section": "G",
        "description": "Wholesale of chemical products"
    },
    {
        "code": "46760",
        "section": "G",
        "description": "Wholesale of other intermediate products"
    },
    {
        "code": "46770",
        "section": "G",
        "description": "Wholesale of waste and scrap"
    },
    {
        "code": "46900",
        "section": "G",
        "description": "Non:specialised wholesale trade"
    },
    {
        "code": "47110",
        "section": "G",
        "description": "Retail sale in non:specialised stores with food, beverages or tobacco predominating"
    },
    {
        "code": "47190",
        "section": "G",
        "description": "Other retail sale in non:specialised stores"
    },
    {
        "code": "47210",
        "section": "G",
        "description": "Retail sale of fruit and vegetables in specialised stores"
    },
    {
        "code": "47220",
        "section": "G",
        "description": "Retail sale of meat and meat products in specialised stores"
    },
    {
        "code": "47230",
        "section": "G",
        "description": "Retail sale of fish, crustaceans and molluscs in specialised stores"
    },
    {
        "code": "47240",
        "section": "G",
        "description": "Retail sale of bread, cakes, flour confectionery and sugar confectionery in specialised stores"
    },
    {
        "code": "47250",
        "section": "G",
        "description": "Retail sale of beverages in specialised stores"
    },
    {
        "code": "47260",
        "section": "G",
        "description": "Retail sale of tobacco products in specialised stores"
    },
    {
        "code": "47290",
        "section": "G",
        "description": "Other retail sale of food in specialised stores"
    },
    {
        "code": "47300",
        "section": "G",
        "description": "Retail sale of automotive fuel in specialised stores"
    },
    {
        "code": "47410",
        "section": "G",
        "description": "Retail sale of computers, peripheral units and software in specialised stores"
    },
    {
        "code": "47421",
        "section": "G",
        "description": "Retail sale of mobile telephones"
    },
    {
        "code": "47429",
        "section": "G",
        "description": "Retail sale of telecommunications equipment other than mobile telephones"
    },
    {
        "code": "47430",
        "section": "G",
        "description": "Retail sale of audio and video equipment in specialised stores"
    },
    {
        "code": "47510",
        "section": "G",
        "description": "Retail sale of textiles in specialised stores"
    },
    {
        "code": "47520",
        "section": "G",
        "description": "Retail sale of hardware, paints and glass in specialised stores"
    },
    {
        "code": "47530",
        "section": "G",
        "description": "Retail sale of carpets, rugs, wall and floor coverings in specialised stores"
    },
    {
        "code": "47540",
        "section": "G",
        "description": "Retail sale of electrical household appliances in specialised stores"
    },
    {
        "code": "47591",
        "section": "G",
        "description": "Retail sale of musical instruments and scores"
    },
    {
        "code": "47599",
        "section": "G",
        "description": "Retail of furniture, lighting, and similar (not musical instruments or scores) in specialised store"
    },
    {
        "code": "47610",
        "section": "G",
        "description": "Retail sale of books in specialised stores"
    },
    {
        "code": "47620",
        "section": "G",
        "description": "Retail sale of newspapers and stationery in specialised stores"
    },
    {
        "code": "47630",
        "section": "G",
        "description": "Retail sale of music and video recordings in specialised stores"
    },
    {
        "code": "47640",
        "section": "G",
        "description": "Retail sale of sports goods, fishing gear, camping goods, boats and bicycles"
    },
    {
        "code": "47650",
        "section": "G",
        "description": "Retail sale of games and toys in specialised stores"
    },
    {
        "code": "47710",
        "section": "G",
        "description": "Retail sale of clothing in specialised stores"
    },
    {
        "code": "47721",
        "section": "G",
        "description": "Retail sale of footwear in specialised stores"
    },
    {
        "code": "47722",
        "section": "G",
        "description": "Retail sale of leather goods in specialised stores"
    },
    {
        "code": "47730",
        "section": "G",
        "description": "Dispensing chemist in specialised stores"
    },
    {
        "code": "47741",
        "section": "G",
        "description": "Retail sale of hearing aids"
    },
    {
        "code": "47749",
        "section": "G",
        "description": "Retail sale of medical and orthopaedic goods in specialised stores (not incl. hearing aids) n.e.c."
    },
    {
        "code": "47750",
        "section": "G",
        "description": "Retail sale of cosmetic and toilet articles in specialised stores"
    },
    {
        "code": "47760",
        "section": "G",
        "description": "Retail sale of flowers, plants, seeds, fertilizers, pet animals and pet food in specialised stores"
    },
    {
        "code": "47770",
        "section": "G",
        "description": "Retail sale of watches and jewellery in specialised stores"
    },
    {
        "code": "47781",
        "section": "G",
        "description": "Retail sale in commercial art galleries"
    },
    {
        "code": "47782",
        "section": "G",
        "description": "Retail sale by opticians"
    },
    {
        "code": "47789",
        "section": "G",
        "description": "Other retail sale of new goods in specialised stores (not commercial art galleries and opticians)"
    },
    {
        "code": "47791",
        "section": "G",
        "description": "Retail sale of antiques including antique books in stores"
    },
    {
        "code": "47799",
        "section": "G",
        "description": "Retail sale of other second:hand goods in stores (not incl. antiques)"
    },
    {
        "code": "47810",
        "section": "G",
        "description": "Retail sale via stalls and markets of food, beverages and tobacco products"
    },
    {
        "code": "47820",
        "section": "G",
        "description": "Retail sale via stalls and markets of textiles, clothing and footwear"
    },
    {
        "code": "47890",
        "section": "G",
        "description": "Retail sale via stalls and markets of other goods"
    },
    {
        "code": "47910",
        "section": "G",
        "description": "Retail sale via mail order houses or via Internet"
    },
    {
        "code": "47990",
        "section": "G",
        "description": "Other retail sale not in stores, stalls or markets"
    },
    {
        "code": "49100",
        "section": "H",
        "description": "Passenger rail transport, interurban"
    },
    {
        "code": "49200",
        "section": "H",
        "description": "Freight rail transport"
    },
    {
        "code": "49311",
        "section": "H",
        "description": "Urban and suburban passenger railway transportation by underground, metro and similar systems"
    },
    {
        "code": "49319",
        "section": "H",
        "description": "Other urban, suburban or metropolitan passenger land transport (not underground, metro or similar)"
    },
    {
        "code": "49320",
        "section": "H",
        "description": "Taxi operation"
    },
    {
        "code": "49390",
        "section": "H",
        "description": "Other passenger land transport"
    },
    {
        "code": "49410",
        "section": "H",
        "description": "Freight transport by road"
    },
    {
        "code": "49420",
        "section": "H",
        "description": "Removal services"
    },
    {
        "code": "49500",
        "section": "H",
        "description": "Transport via pipeline"
    },
    {
        "code": "50100",
        "section": "H",
        "description": "Sea and coastal passenger water transport"
    },
    {
        "code": "50200",
        "section": "H",
        "description": "Sea and coastal freight water transport"
    },
    {
        "code": "50300",
        "section": "H",
        "description": "Inland passenger water transport"
    },
    {
        "code": "50400",
        "section": "H",
        "description": "Inland freight water transport"
    },
    {
        "code": "51101",
        "section": "H",
        "description": "Scheduled passenger air transport"
    },
    {
        "code": "51102",
        "section": "H",
        "description": "Non:scheduled passenger air transport"
    },
    {
        "code": "51210",
        "section": "H",
        "description": "Freight air transport"
    },
    {
        "code": "51220",
        "section": "H",
        "description": "Space transport"
    },
    {
        "code": "52101",
        "section": "H",
        "description": "Operation of warehousing and storage facilities for water transport activities"
    },
    {
        "code": "52102",
        "section": "H",
        "description": "Operation of warehousing and storage facilities for air transport activities"
    },
    {
        "code": "52103",
        "section": "H",
        "description": "Operation of warehousing and storage facilities for land transport activities"
    },
    {
        "code": "52211",
        "section": "H",
        "description": "Operation of rail freight terminals"
    },
    {
        "code": "52212",
        "section": "H",
        "description": "Operation of rail passenger facilities at railway stations"
    },
    {
        "code": "52213",
        "section": "H",
        "description": "Operation of bus and coach passenger facilities at bus and coach stations"
    },
    {
        "code": "52219",
        "section": "H",
        "description": "Other service activities incidental to land transportation, n.e.c."
    },
    {
        "code": "52220",
        "section": "H",
        "description": "Service activities incidental to water transportation"
    },
    {
        "code": "52230",
        "section": "H",
        "description": "Service activities incidental to air transportation"
    },
    {
        "code": "52241",
        "section": "H",
        "description": "Cargo handling for water transport activities"
    },
    {
        "code": "52242",
        "section": "H",
        "description": "Cargo handling for air transport activities"
    },
    {
        "code": "52243",
        "section": "H",
        "description": "Cargo handling for land transport activities"
    },
    {
        "code": "52290",
        "section": "H",
        "description": "Other transportation support activities"
    },
    {
        "code": "53100",
        "section": "H",
        "description": "Postal activities under universal service obligation"
    },
    {
        "code": "53201",
        "section": "H",
        "description": "Licensed carriers"
    },
    {
        "code": "53202",
        "section": "H",
        "description": "Unlicensed carriers"
    },
    {
        "code": "55100",
        "section": "I",
        "description": "Hotels and similar accommodation"
    },
    {
        "code": "55201",
        "section": "I",
        "description": "Holiday centres and villages"
    },
    {
        "code": "55202",
        "section": "I",
        "description": "Youth hostels"
    },
    {
        "code": "55209",
        "section": "I",
        "description": "Other holiday and other collective accommodation"
    },
    {
        "code": "55300",
        "section": "I",
        "description": "Recreational vehicle parks, trailer parks and camping grounds"
    },
    {
        "code": "55900",
        "section": "I",
        "description": "Other accommodation"
    },
    {
        "code": "56101",
        "section": "I",
        "description": "Licenced restaurants"
    },
    {
        "code": "56102",
        "section": "I",
        "description": "Unlicenced restaurants and cafes"
    },
    {
        "code": "56103",
        "section": "I",
        "description": "Take:away food shops and mobile food stands"
    },
    {
        "code": "56210",
        "section": "I",
        "description": "Event catering activities"
    },
    {
        "code": "56290",
        "section": "I",
        "description": "Other food services"
    },
    {
        "code": "56301",
        "section": "I",
        "description": "Licenced clubs"
    },
    {
        "code": "56302",
        "section": "I",
        "description": "Public houses and bars"
    },
    {
        "code": "58110",
        "section": "J",
        "description": "Book publishing"
    },
    {
        "code": "58120",
        "section": "J",
        "description": "Publishing of directories and mailing lists"
    },
    {
        "code": "58130",
        "section": "J",
        "description": "Publishing of newspapers"
    },
    {
        "code": "58141",
        "section": "J",
        "description": "Publishing of learned journals"
    },
    {
        "code": "58142",
        "section": "J",
        "description": "Publishing of consumer and business journals and periodicals"
    },
    {
        "code": "58190",
        "section": "J",
        "description": "Other publishing activities"
    },
    {
        "code": "58210",
        "section": "J",
        "description": "Publishing of computer games"
    },
    {
        "code": "58290",
        "section": "J",
        "description": "Other software publishing"
    },
    {
        "code": "59111",
        "section": "J",
        "description": "Motion picture production activities"
    },
    {
        "code": "59112",
        "section": "J",
        "description": "Video production activities"
    },
    {
        "code": "59113",
        "section": "J",
        "description": "Television programme production activities"
    },
    {
        "code": "59120",
        "section": "J",
        "description": "Motion picture, video and television programme post:production activities"
    },
    {
        "code": "59131",
        "section": "J",
        "description": "Motion picture distribution activities"
    },
    {
        "code": "59132",
        "section": "J",
        "description": "Video distribution activities"
    },
    {
        "code": "59133",
        "section": "J",
        "description": "Television programme distribution activities"
    },
    {
        "code": "59140",
        "section": "J",
        "description": "Motion picture projection activities"
    },
    {
        "code": "59200",
        "section": "J",
        "description": "Sound recording and music publishing activities"
    },
    {
        "code": "60100",
        "section": "J",
        "description": "Radio broadcasting"
    },
    {
        "code": "60200",
        "section": "J",
        "description": "Television programming and broadcasting activities"
    },
    {
        "code": "61100",
        "section": "J",
        "description": "Wired telecommunications activities"
    },
    {
        "code": "61200",
        "section": "J",
        "description": "Wireless telecommunications activities"
    },
    {
        "code": "61300",
        "section": "J",
        "description": "Satellite telecommunications activities"
    },
    {
        "code": "61900",
        "section": "J",
        "description": "Other telecommunications activities"
    },
    {
        "code": "62011",
        "section": "J",
        "description": "Ready:made interactive leisure and entertainment software development"
    },
    {
        "code": "62012",
        "section": "J",
        "description": "Business and domestic software development"
    },
    {
        "code": "62020",
        "section": "J",
        "description": "Information technology consultancy activities"
    },
    {
        "code": "62030",
        "section": "J",
        "description": "Computer facilities management activities"
    },
    {
        "code": "62090",
        "section": "J",
        "description": "Other information technology service activities"
    },
    {
        "code": "63110",
        "section": "J",
        "description": "Data processing, hosting and related activities"
    },
    {
        "code": "63120",
        "section": "J",
        "description": "Web portals"
    },
    {
        "code": "63910",
        "section": "J",
        "description": "News agency activities"
    },
    {
        "code": "63990",
        "section": "J",
        "description": "Other information service activities n.e.c."
    },
    {
        "code": "64110",
        "section": "K",
        "description": "Central banking"
    },
    {
        "code": "64191",
        "section": "K",
        "description": "Banks"
    },
    {
        "code": "64192",
        "section": "K",
        "description": "Building societies"
    },
    {
        "code": "64201",
        "section": "K",
        "description": "Activities of agricultural holding companies"
    },
    {
        "code": "64202",
        "section": "K",
        "description": "Activities of production holding companies"
    },
    {
        "code": "64203",
        "section": "K",
        "description": "Activities of construction holding companies"
    },
    {
        "code": "64204",
        "section": "K",
        "description": "Activities of distribution holding companies"
    },
    {
        "code": "64205",
        "section": "K",
        "description": "Activities of financial services holding companies"
    },
    {
        "code": "64209",
        "section": "K",
        "description": "Activities of other holding companies n.e.c."
    },
    {
        "code": "64301",
        "section": "K",
        "description": "Activities of investment trusts"
    },
    {
        "code": "64302",
        "section": "K",
        "description": "Activities of unit trusts"
    },
    {
        "code": "64303",
        "section": "K",
        "description": "Activities of venture and development capital companies"
    },
    {
        "code": "64304",
        "section": "K",
        "description": "Activities of open:ended investment companies"
    },
    {
        "code": "64305",
        "section": "K",
        "description": "Activities of property unit trusts"
    },
    {
        "code": "64306",
        "section": "K",
        "description": "Activities of real estate investment trusts"
    },
    {
        "code": "64910",
        "section": "K",
        "description": "Financial leasing"
    },
    {
        "code": "64921",
        "section": "K",
        "description": "Credit granting by non:deposit taking finance houses and other specialist consumer credit grantors"
    },
    {
        "code": "64922",
        "section": "K",
        "description": "Activities of mortgage finance companies"
    },
    {
        "code": "64929",
        "section": "K",
        "description": "Other credit granting n.e.c."
    },
    {
        "code": "64991",
        "section": "K",
        "description": "Security dealing on own account"
    },
    {
        "code": "64992",
        "section": "K",
        "description": "Factoring"
    },
    {
        "code": "64999",
        "section": "K",
        "description": "Financial intermediation not elsewhere classified"
    },
    {
        "code": "65110",
        "section": "K",
        "description": "Life insurance"
    },
    {
        "code": "65120",
        "section": "K",
        "description": "Non:life insurance"
    },
    {
        "code": "65201",
        "section": "K",
        "description": "Life reinsurance"
    },
    {
        "code": "65202",
        "section": "K",
        "description": "Non:life reinsurance"
    },
    {
        "code": "65300",
        "section": "K",
        "description": "Pension funding"
    },
    {
        "code": "66110",
        "section": "K",
        "description": "Administration of financial markets"
    },
    {
        "code": "66120",
        "section": "K",
        "description": "Security and commodity contracts dealing activities"
    },
    {
        "code": "66190",
        "section": "K",
        "description": "Activities auxiliary to financial intermediation n.e.c."
    },
    {
        "code": "66210",
        "section": "K",
        "description": "Risk and damage evaluation"
    },
    {
        "code": "66220",
        "section": "K",
        "description": "Activities of insurance agents and brokers"
    },
    {
        "code": "66290",
        "section": "K",
        "description": "Other activities auxiliary to insurance and pension funding"
    },
    {
        "code": "66300",
        "section": "K",
        "description": "Fund management activities"
    },
    {
        "code": "68100",
        "section": "L",
        "description": "Buying and selling of own real estate"
    },
    {
        "code": "68201",
        "section": "L",
        "description": "Renting and operating of Housing Association real estate"
    },
    {
        "code": "68202",
        "section": "L",
        "description": "Letting and operating of conference and exhibition centres"
    },
    {
        "code": "68209",
        "section": "L",
        "description": "Other letting and operating of own or leased real estate"
    },
    {
        "code": "68310",
        "section": "L",
        "description": "Real estate agencies"
    },
    {
        "code": "68320",
        "section": "L",
        "description": "Management of real estate on a fee or contract basis"
    },
    {
        "code": "69101",
        "section": "M",
        "description": "Barristers at law"
    },
    {
        "code": "69102",
        "section": "M",
        "description": "Solicitors"
    },
    {
        "code": "69109",
        "section": "M",
        "description": "Activities of patent and copyright agents; other legal activities n.e.c."
    },
    {
        "code": "69201",
        "section": "M",
        "description": "Accounting and auditing activities"
    },
    {
        "code": "69202",
        "section": "M",
        "description": "Bookkeeping activities"
    },
    {
        "code": "69203",
        "section": "M",
        "description": "Tax consultancy"
    },
    {
        "code": "70100",
        "section": "M",
        "description": "Activities of head offices"
    },
    {
        "code": "70210",
        "section": "M",
        "description": "Public relations and communications activities"
    },
    {
        "code": "70221",
        "section": "M",
        "description": "Financial management"
    },
    {
        "code": "70229",
        "section": "M",
        "description": "Management consultancy activities other than financial management"
    },
    {
        "code": "71111",
        "section": "M",
        "description": "Architectural activities"
    },
    {
        "code": "71112",
        "section": "M",
        "description": "Urban planning and landscape architectural activities"
    },
    {
        "code": "71121",
        "section": "M",
        "description": "Engineering design activities for industrial process and production"
    },
    {
        "code": "71122",
        "section": "M",
        "description": "Engineering related scientific and technical consulting activities"
    },
    {
        "code": "71129",
        "section": "M",
        "description": "Other engineering activities"
    },
    {
        "code": "71200",
        "section": "M",
        "description": "Technical testing and analysis"
    },
    {
        "code": "72110",
        "section": "M",
        "description": "Research and experimental development on biotechnology"
    },
    {
        "code": "72190",
        "section": "M",
        "description": "Other research and experimental development on natural sciences and engineering"
    },
    {
        "code": "72200",
        "section": "M",
        "description": "Research and experimental development on social sciences and humanities"
    },
    {
        "code": "73110",
        "section": "M",
        "description": "Advertising agencies"
    },
    {
        "code": "73120",
        "section": "M",
        "description": "Media representation services"
    },
    {
        "code": "73200",
        "section": "M",
        "description": "Market research and public opinion polling"
    },
    {
        "code": "74100",
        "section": "M",
        "description": "specialised design activities"
    },
    {
        "code": "74201",
        "section": "M",
        "description": "Portrait photographic activities"
    },
    {
        "code": "74202",
        "section": "M",
        "description": "Other specialist photography"
    },
    {
        "code": "74203",
        "section": "M",
        "description": "Film processing"
    },
    {
        "code": "74209",
        "section": "M",
        "description": "Photographic activities not elsewhere classified"
    },
    {
        "code": "74300",
        "section": "M",
        "description": "Translation and interpretation activities"
    },
    {
        "code": "74901",
        "section": "M",
        "description": "Environmental consulting activities"
    },
    {
        "code": "74902",
        "section": "M",
        "description": "Quantity surveying activities"
    },
    {
        "code": "74909",
        "section": "M",
        "description": "Other professional, scientific and technical activities n.e.c."
    },
    {
        "code": "74990",
        "section": "M",
        "description": "Non:trading company"
    },
    {
        "code": "75000",
        "section": "M",
        "description": "Veterinary activities"
    },
    {
        "code": "77110",
        "section": "N",
        "description": "Renting and leasing of cars and light motor vehicles"
    },
    {
        "code": "77120",
        "section": "N",
        "description": "Renting and leasing of trucks and other heavy vehicles"
    },
    {
        "code": "77210",
        "section": "N",
        "description": "Renting and leasing of recreational and sports goods"
    },
    {
        "code": "77220",
        "section": "N",
        "description": "Renting of video tapes and disks"
    },
    {
        "code": "77291",
        "section": "N",
        "description": "Renting and leasing of media entertainment equipment"
    },
    {
        "code": "77299",
        "section": "N",
        "description": "Renting and leasing of other personal and household goods"
    },
    {
        "code": "77310",
        "section": "N",
        "description": "Renting and leasing of agricultural machinery and equipment"
    },
    {
        "code": "77320",
        "section": "N",
        "description": "Renting and leasing of construction and civil engineering machinery and equipment"
    },
    {
        "code": "77330",
        "section": "N",
        "description": "Renting and leasing of office machinery and equipment (including computers)"
    },
    {
        "code": "77341",
        "section": "N",
        "description": "Renting and leasing of passenger water transport equipment"
    },
    {
        "code": "77342",
        "section": "N",
        "description": "Renting and leasing of freight water transport equipment"
    },
    {
        "code": "77351",
        "section": "N",
        "description": "Renting and leasing of air passenger transport equipment"
    },
    {
        "code": "77352",
        "section": "N",
        "description": "Renting and leasing of freight air transport equipment"
    },
    {
        "code": "77390",
        "section": "N",
        "description": "Renting and leasing of other machinery, equipment and tangible goods n.e.c."
    },
    {
        "code": "77400",
        "section": "N",
        "description": "Leasing of intellectual property and similar products, except copyright works"
    },
    {
        "code": "78101",
        "section": "N",
        "description": "Motion picture, television and other theatrical casting activities"
    },
    {
        "code": "78109",
        "section": "N",
        "description": "Other activities of employment placement agencies"
    },
    {
        "code": "78200",
        "section": "N",
        "description": "Temporary employment agency activities"
    },
    {
        "code": "78300",
        "section": "N",
        "description": "Human resources provision and management of human resources functions"
    },
    {
        "code": "79110",
        "section": "N",
        "description": "Travel agency activities"
    },
    {
        "code": "79120",
        "section": "N",
        "description": "Tour operator activities"
    },
    {
        "code": "79901",
        "section": "N",
        "description": "Activities of tourist guides"
    },
    {
        "code": "79909",
        "section": "N",
        "description": "Other reservation service activities n.e.c."
    },
    {
        "code": "80100",
        "section": "N",
        "description": "Private security activities"
    },
    {
        "code": "80200",
        "section": "N",
        "description": "Security systems service activities"
    },
    {
        "code": "80300",
        "section": "N",
        "description": "Investigation activities"
    },
    {
        "code": "81100",
        "section": "N",
        "description": "Combined facilities support activities"
    },
    {
        "code": "81210",
        "section": "N",
        "description": "General cleaning of buildings"
    },
    {
        "code": "81221",
        "section": "N",
        "description": "Window cleaning services"
    },
    {
        "code": "81222",
        "section": "N",
        "description": "Specialised cleaning services"
    },
    {
        "code": "81223",
        "section": "N",
        "description": "Furnace and chimney cleaning services"
    },
    {
        "code": "81229",
        "section": "N",
        "description": "Other building and industrial cleaning activities"
    },
    {
        "code": "81291",
        "section": "N",
        "description": "Disinfecting and exterminating services"
    },
    {
        "code": "81299",
        "section": "N",
        "description": "Other cleaning services"
    },
    {
        "code": "81300",
        "section": "N",
        "description": "Landscape service activities"
    },
    {
        "code": "82110",
        "section": "N",
        "description": "Combined office administrative service activities"
    },
    {
        "code": "82190",
        "section": "N",
        "description": "Photocopying, document preparation and other specialised office support activities"
    },
    {
        "code": "82200",
        "section": "N",
        "description": "Activities of call centres"
    },
    {
        "code": "82301",
        "section": "N",
        "description": "Activities of exhibition and fair organisers"
    },
    {
        "code": "82302",
        "section": "N",
        "description": "Activities of conference organisers"
    },
    {
        "code": "82911",
        "section": "N",
        "description": "Activities of collection agencies"
    },
    {
        "code": "82912",
        "section": "N",
        "description": "Activities of credit bureaus"
    },
    {
        "code": "82920",
        "section": "N",
        "description": "Packaging activities"
    },
    {
        "code": "82990",
        "section": "N",
        "description": "Other business support service activities n.e.c."
    },
    {
        "code": "84110",
        "section": "O",
        "description": "General public administration activities"
    },
    {
        "code": "84120",
        "section": "O",
        "description": "Regulation of health care, education, cultural and other social services, not incl. social security"
    },
    {
        "code": "84130",
        "section": "O",
        "description": "Regulation of and contribution to more efficient operation of businesses"
    },
    {
        "code": "84210",
        "section": "O",
        "description": "Foreign affairs"
    },
    {
        "code": "84220",
        "section": "O",
        "description": "Defence activities"
    },
    {
        "code": "84230",
        "section": "O",
        "description": "Justice and judicial activities"
    },
    {
        "code": "84240",
        "section": "O",
        "description": "Public order and safety activities"
    },
    {
        "code": "84250",
        "section": "O",
        "description": "Fire service activities"
    },
    {
        "code": "84300",
        "section": "O",
        "description": "Compulsory social security activities"
    },
    {
        "code": "85100",
        "section": "P",
        "description": "Pre:primary education"
    },
    {
        "code": "85200",
        "section": "P",
        "description": "Primary education"
    },
    {
        "code": "85310",
        "section": "P",
        "description": "General secondary education"
    },
    {
        "code": "85320",
        "section": "P",
        "description": "Technical and vocational secondary education"
    },
    {
        "code": "85410",
        "section": "P",
        "description": "Post:secondary non:tertiary education"
    },
    {
        "code": "85421",
        "section": "P",
        "description": "First:degree level higher education"
    },
    {
        "code": "85422",
        "section": "P",
        "description": "Post:graduate level higher education"
    },
    {
        "code": "85510",
        "section": "P",
        "description": "Sports and recreation education"
    },
    {
        "code": "85520",
        "section": "P",
        "description": "Cultural education"
    },
    {
        "code": "85530",
        "section": "P",
        "description": "Driving school activities"
    },
    {
        "code": "85590",
        "section": "P",
        "description": "Other education n.e.c."
    },
    {
        "code": "85600",
        "section": "P",
        "description": "Educational support services"
    },
    {
        "code": "86101",
        "section": "Q",
        "description": "Hospital activities"
    },
    {
        "code": "86102",
        "section": "Q",
        "description": "Medical nursing home activities"
    },
    {
        "code": "86210",
        "section": "Q",
        "description": "General medical practice activities"
    },
    {
        "code": "86220",
        "section": "Q",
        "description": "Specialists medical practice activities"
    },
    {
        "code": "86230",
        "section": "Q",
        "description": "Dental practice activities"
    },
    {
        "code": "86900",
        "section": "Q",
        "description": "Other human health activities"
    },
    {
        "code": "87100",
        "section": "Q",
        "description": "Residential nursing care facilities"
    },
    {
        "code": "87200",
        "section": "Q",
        "description": "Residential care activities for learning difficulties, mental health and substance abuse"
    },
    {
        "code": "87300",
        "section": "Q",
        "description": "Residential care activities for the elderly and disabled"
    },
    {
        "code": "87900",
        "section": "Q",
        "description": "Other residential care activities n.e.c."
    },
    {
        "code": "88100",
        "section": "Q",
        "description": "Social work activities without accommodation for the elderly and disabled"
    },
    {
        "code": "88910",
        "section": "Q",
        "description": "Child day:care activities"
    },
    {
        "code": "88990",
        "section": "Q",
        "description": "Other social work activities without accommodation n.e.c."
    },
    {
        "code": "90010",
        "section": "R",
        "description": "Performing arts"
    },
    {
        "code": "90020",
        "section": "R",
        "description": "Support activities to performing arts"
    },
    {
        "code": "90030",
        "section": "R",
        "description": "Artistic creation"
    },
    {
        "code": "90040",
        "section": "R",
        "description": "Operation of arts facilities"
    },
    {
        "code": "91011",
        "section": "R",
        "description": "Library activities"
    },
    {
        "code": "91012",
        "section": "R",
        "description": "Archives activities"
    },
    {
        "code": "91020",
        "section": "R",
        "description": "Museums activities"
    },
    {
        "code": "91030",
        "section": "R",
        "description": "Operation of historical sites and buildings and similar visitor attractions"
    },
    {
        "code": "91040",
        "section": "R",
        "description": "Botanical and zoological gardens and nature reserves activities"
    },
    {
        "code": "92000",
        "section": "R",
        "description": "Gambling and betting activities"
    },
    {
        "code": "93110",
        "section": "R",
        "description": "Operation of sports facilities"
    },
    {
        "code": "93120",
        "section": "R",
        "description": "Activities of sport clubs"
    },
    {
        "code": "93130",
        "section": "R",
        "description": "Fitness facilities"
    },
    {
        "code": "93191",
        "section": "R",
        "description": "Activities of racehorse owners"
    },
    {
        "code": "93199",
        "section": "R",
        "description": "Other sports activities"
    },
    {
        "code": "93210",
        "section": "R",
        "description": "Activities of amusement parks and theme parks"
    },
    {
        "code": "93290",
        "section": "R",
        "description": "Other amusement and recreation activities n.e.c."
    },
    {
        "code": "94110",
        "section": "S",
        "description": "Activities of business and employers membership organisations"
    },
    {
        "code": "94120",
        "section": "S",
        "description": "Activities of professional membership organisations"
    },
    {
        "code": "94200",
        "section": "S",
        "description": "Activities of trade unions"
    },
    {
        "code": "94910",
        "section": "S",
        "description": "Activities of religious organisations"
    },
    {
        "code": "94920",
        "section": "S",
        "description": "Activities of political organisations"
    },
    {
        "code": "94990",
        "section": "S",
        "description": "Activities of other membership organisations n.e.c."
    },
    {
        "code": "95110",
        "section": "S",
        "description": "Repair of computers and peripheral equipment"
    },
    {
        "code": "95120",
        "section": "S",
        "description": "Repair of communication equipment"
    },
    {
        "code": "95210",
        "section": "S",
        "description": "Repair of consumer electronics"
    },
    {
        "code": "95220",
        "section": "S",
        "description": "Repair of household appliances and home and garden equipment"
    },
    {
        "code": "95230",
        "section": "S",
        "description": "Repair of footwear and leather goods"
    },
    {
        "code": "95240",
        "section": "S",
        "description": "Repair of furniture and home furnishings"
    },
    {
        "code": "95250",
        "section": "S",
        "description": "Repair of watches, clocks and jewellery"
    },
    {
        "code": "95290",
        "section": "S",
        "description": "Repair of personal and household goods n.e.c."
    },
    {
        "code": "96010",
        "section": "S",
        "description": "Washing and (dry:)cleaning of textile and fur products"
    },
    {
        "code": "96020",
        "section": "S",
        "description": "Hairdressing and other beauty treatment"
    },
    {
        "code": "96030",
        "section": "S",
        "description": "Funeral and related activities"
    },
    {
        "code": "96040",
        "section": "S",
        "description": "Physical well:being activities"
    },
    {
        "code": "96090",
        "section": "S",
        "description": "Other service activities n.e.c."
    },
    {
        "code": "97000",
        "section": "T",
        "description": "Activities of households as employers of domestic personnel"
    },
    {
        "code": "98000",
        "section": "T",
        "description": " Residents property management"
    },
    {
        "code": "98100",
        "section": "T",
        "description": "Undifferentiated goods:producing activities of private households for own use"
    },
    {
        "code": "98200",
        "section": "T",
        "description": "Undifferentiated service:producing activities of private households for own use"
    },
    {
        "code": "99000",
        "section": "U",
        "description": "Activities of extraterritorial organisations and bodies"
    },
    {
        "code": "99999",
        "section": "U",
        "description": "Dormant Company"
    }
]

export { subIndustries }