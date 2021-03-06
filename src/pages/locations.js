import React from "react";
import Header from "../components/Header-Footer/Header";
import GetInTouchComponent from "../components/GetInTouch-Component/GetInTouchComponent";
import Footer from "../components/Header-Footer/Footer";
import MapComponent from "../components/Locations/Map";
import LocationInformationCard from "../components/Locations/LocationInformationCard";
import { StyledLocationsContainer, StyledMapComponent, StyledLocationInformationComponent } from "../components/Locations/location-styles";

const Locations = () => {
    return (
        <div>
            <Header />

            <StyledLocationsContainer>
                <StyledMapComponent>
                    <MapComponent 
                        imageSource="../assets/locations/tablet/image-map-canada.png" 
                        imageAlt="Map of Toronto."
                    />
                </StyledMapComponent>
                <StyledLocationInformationComponent>
                    <LocationInformationCard 
                        country="Canada" 
                        officeName="Central Office"
                        street="3886 Wellington Street"
                        city="Toronto, Ontario"
                        postCode="M9C 3J5"
                        phone="+1 253-863-8967"
                        email="contact@designo.co"
                    />
                </StyledLocationInformationComponent>

                <StyledMapComponent>
                    <MapComponent 
                        imageSource="../assets/locations/tablet/image-map-australia.png" 
                        imageAlt="Map of New South Wales."
                    />
                </StyledMapComponent>
                <StyledLocationInformationComponent>
                    <LocationInformationCard 
                        country="Australia" 
                        officeName="AU Office"
                        street="19 Balonne Street"
                        city="New South Wales"
                        postCode="2443"
                        phone="(02) 6720 9092"
                        email="contact@designo.au"
                    />
                </StyledLocationInformationComponent>

                <StyledMapComponent>
                    <MapComponent 
                        imageSource="../assets/locations/tablet/image-map-uk.png" 
                        imageAlt="Map of Rhyd-y-fro."
                    />
                </StyledMapComponent>
                <StyledLocationInformationComponent>
                    <LocationInformationCard
                        country="United Kingdom" 
                        officeName="UK Office"
                        street="13 Colorado Way"
                        city="Rhyd-y-fro"
                        postCode="SA8 9GA"
                        phone="078 3115 1400"
                        email="contact@designo.uk"
                    />
                </StyledLocationInformationComponent>
            </StyledLocationsContainer>

            <GetInTouchComponent />
            <Footer />
        </div>
    )
}

export default Locations;
