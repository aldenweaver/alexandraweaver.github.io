import file from '../../data/about-data.json'; 

function HomePageBody() {
    const aboutData = file['about-data'];

    return ( 
        <>
            <h2>Home Page Body Goes Here</h2>
            <p>Name: {aboutData.name}</p>
        </>
     );
}

export default HomePageBody;