const sdgsShort = [{ value: 1, text: "SDG 1: No Poverty" },
{ value: 2, text: "SDG 2: Zero Hunger" },
{ value: 3, text: "SDG 3: Good Health and Well-Being" },
{ value: 4, text: "SDG 4: Quality Education" },
{ value: 5, text: "SDG 5: Gender Equality" },
{ value: 6, text: "SDG 6: Clean Water and Sanitation" },
{ value: 7, text: "SDG 7: Affordable and Clean Energy" },
{ value: 8, text: "SDG 8: Decent Work and Economic Growth" },
{ value: 9, text: "SDG 9: Industry, Innovation and Infrastructure" },
{ value: 10, text: "SDG 10: Reduced Inequalities" },
{ value: 11, text: "SDG 11: Sustainable Cities and Communities " },
{ value: 12, text: "SDG 12: Responsible Consumption and Production" },
{ value: 13, text: "SDG 13: Climate Action" },
{ value: 14, text: "SDG 14: Life Below Water" },
{ value: 15, text: "SDG 15: Life on Land" },
{ value: 16, text: "SDG 16: Peace, Justice and Strong Institutions" },
{ value: 17, text: "SDG 17: Partnerships for the Goals" }
]


const sdgs = [{
    value: 1, text: "SDG 1:  No Poverty", targets: [
        { value: "1.1", text: "1.1 By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day" },
        { value: "1.2", text: "1.2 By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions" },
        { value: "1.3", text: "1.3 Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable" },
        { value: "1.4", text: "1.4 By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance" },
        { value: "1.5", text: "1.5 By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters" },
        { value: "1.a", text: "1.a Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions" },
        { value: "1.b", text: "1.b Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions" }]
},
{
    value: 2, text: "SDG 2: Zero Hunger", targets: [{ value: "2.1", text: "2.1 By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round" },
    { value: "2.2", text: "2.2 By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons" },
    { value: "2.3", text: "2.3 By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment" },
    { value: "2.4", text: "2.4 By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality" },
    { value: "2.5", text: "2.5 By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed" },
    { value: "2.a", text: "2.a Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries" },
    { value: "2.b", text: "2.b Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round" },
    { value: "2.c", text: "2.c Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility" }]
},
{
    value: 3, text: "SDG 3: Good Health and Well-Being", targets: [{ value: "3.1", text: "3.1 By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births" },
    { value: "3.2", text: "3.2 By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births" },
    { value: "3.3", text: "3.3 By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases" },
    { value: "3.4", text: "3.4 By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being" },
    { value: "3.5", text: "3.5 Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol" },
    { value: "3.6", text: "3.6 By 2020, halve the number of global deaths and injuries from road traffic accidents" },
    { value: "3.7", text: "3.7 By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes" },
    { value: "3.8", text: "3.8 Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all" },
    { value: "3.9", text: "3.9 By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination" },
    { value: "3.a", text: "3.a Strengthen the implementation of the World Health Organization Framework Convention on Tobacco Control in all countries, as appropriate" },
    { value: "3.b", text: "3.b Support the research and development of vaccines and medicines for the communicable and non-communicable diseases that primarily affect developing countries, provide access to affordable essential medicines and vaccines, in accordance with the Doha Declaration on the TRIPS Agreement and Public Health, which affirms the right of developing countries to use to the full the provisions in the Agreement on Trade-Related Aspects of Intellectual Property Rights regarding flexibilities to protect public health, and, in particular, provide access to medicines for all" },
    { value: "3.c", text: "3.c Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries, especially in least developed countries and small island developing States" },
    { value: "3.d", text: "3.d Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks" }]
},
{
    value: 4, text: "SDG 4: Quality Education", targets: [{ value: "4.1", text: "4.1 By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes" },
    { value: "4.2", text: "4.2 By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education" },
    { value: "4.3", text: "4.3 By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university" },
    { value: "4.4", text: "4.4 By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship" },
    { value: "4.5", text: "4.5 By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations" },
    { value: "4.6", text: "4.6 By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy" },
    { value: "4.7", text: "4.7 By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development" },
    { value: "4.a", text: "4.a Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all" },
    { value: "4.b", text: "4.b By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries" },
    { value: "4.c", text: "4.c By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing States" }]
},
{
    value: 5, text: "SDG 5: Gender Equality", targets: [{ value: "5.1", text: "5.1 End all forms of discrimination against all women and girls everywhere" },
    { value: "5.2", text: "5.2 Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation" },
    { value: "5.3", text: "5.3 Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation" },
    { value: "5.4", text: "5.4 Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate" },
    { value: "5.5", text: "5.5 Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life" },
    { value: "5.6", text: "5.6 Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences" },
    { value: "5.a", text: "5.a Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land and other forms of property, financial services, inheritance and natural resources, in accordance with national laws" },
    { value: "5.b", text: "5.b Enhance the use of enabling technology, in particular information and communications technology, to promote the empowerment of women" },
    { value: "5.c", text: "5.c Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality and the empowerment of all women and girls at all levels" }]
},
{
    value: 6, text: "SDG 6: Clean Water and Sanitation", targets: [{ value: "6.1", text: "6.1 By 2030, achieve universal and equitable access to safe and affordable drinking water for all" },
    { value: "6.2", text: "6.2 By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations" },
    { value: "6.3", text: "6. 3 By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally" },
    { value: "6.4", text: "6.4 By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity" },
    { value: "6.5", text: "6.5 By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate" },
    { value: "6.6", text: "6.6 By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes" },
    { value: "6.a", text: "6.a By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies" },
    { value: "6.b", text: "6.b Support and strengthen the participation of local communities in improving water and sanitation management" }]
},
{ value: 7, text: "SDG 7: Affordable and Clean Energy", targets: [] },
{ value: 8, text: "SDG 8: Decent Work and Economic Growth", targets: [] },
{ value: 9, text: "SDG 9: Industry, Innovation and Infrastructure", targets: [] },
{ value: 10, text: "SDG 10: Reduced Inequalities", targets: [] },
{ value: 11, text: "SDG 11: Sustainable Cities and Communities ", targets: [] },
{ value: 12, text: "SDG 12: Responsible Consumption and Production", targets: [] },
{ value: 13, text: "SDG 13: Climate Action", targets: [] },
{ value: 14, text: "SDG 14: Life Below Water", targets: [] },
{ value: 15, text: "SDG 15: Life on Land", targets: [] },
{ value: 16, text: "SDG 16: Peace, Justice and Strong Institutions", targets: [] },
{ value: 17, text: "SDG 17: Partnerships for the Goals", targets: [] }
]

export { sdgs }



