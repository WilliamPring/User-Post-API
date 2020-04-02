CREATE (Bento:USER {name:'William Pring', userName: 'Bento', born: date("1996-05-03"), about:'Foodie'})
CREATE (BentoPost:REVIEW {reviewSummary:'Amazing Thai Food MUST TRY!!!!', starRating: 4.5, foods: ['Thai Chicken Wings', 'Thai Ice Tea']})
CREATE (locateCountry:Country {country: 'Canada'} )
CREATE (locateMunicipality:Municipality {city: 'Toronto', provienceState: "Ontario"} )
CREATE (PAI:RESTAURANTS{name: 'PAI', bio: 'blah', priceRange: 'medium'})
CREATE(Thai: CUISINE{type: 'Thai' })
CREATE (PAI)-[:TYPE_OF]->(Thai)

CREATE (PAI)-[:IS_IN]->(locateMunicipality)
CREATE (locateMunicipality)-[:EXIST]->(locateCountry)


CREATE (BENTO_PICTURE:Image {imageName: 'Thai Chicken Wing'})
CREATE (BENTO_PICTURE1:Image {imageName: 'Thai Ice Tea'})
CREATE (BentoPost)-[:HAS_IMAGE]->(BENTO_PICTURE)
CREATE (BentoPost)-[:HAS_IMAGE]->(BENTO_PICTURE1)
CREATE (Bento)-[:HAS_POST]->(BentoPost)
CREATE (Bento)-[:ATE_AT]->(PAI)
CREATE (BentoPost)-[:FOOD_REVIEW]->(PAI)