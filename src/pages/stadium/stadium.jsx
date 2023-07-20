import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/header';
import UnderHeader from '../../component/underHeader/underHeader';
import FranceLogo from '../../assets/Flags/france.png';
import NewZealandLogo from '../../assets/Flags/new-zealand.png';
import ItalyLogo from '../../assets/Flags/italy.png';
import UruguayLogo from '../../assets/Flags/uruguay.png';
import NamibiaLogo from '../../assets/Flags/namibia.png';
import SouthAfricaLogo from '../../assets/Flags/south-africa.png';
import IrelandLogo from '../../assets/Flags/ireland.png';
import ScotlandLogo from '../../assets/Flags/scotland.png';
import TongaLogo from '../../assets/Flags/tonga.png';
import RomaniaLogo from '../../assets/Flags/romania.png';
import WalesLogo from '../../assets/Flags/wales.png';
import AustraliaLogo from '../../assets/Flags/australia.png';
import FijiLogo from '../../assets/Flags/fiji.png';
import GeorgiaLogo from '../../assets/Flags/georgia.png';
import PortugalLogo from '../../assets/Flags/portugal.png';
import EnglandLogo from '../../assets/Flags/england.png';
import JapanLogo from '../../assets/Flags/japan.png';
import ArgentinaLogo from '../../assets/Flags/argentina.png';
import SamoaLogo from '../../assets/Flags/samoa.png';
import ChileLogo from '../../assets/Flags/chile.png';

const CategoryTitle = styled.h2`
  margin-bottom: 20px;
  text-align: left;
  width: 80%;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 184px;
`;

const ZoneImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ZoneButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 10px;
  border: 0px;
  padding: 16px;
  background-color: #fff;
  border-radius: 6.4px;

  &:hover {
    cursor: pointer;
  }
`;

const ColorBand = styled.span`
  display: block;
  width: 10px;
  height: 24px;
  background-color: ${props => props.color};
  border-radius: 6.4px;
  margin-right: 20px;
`;

const ButtonText = styled.span`
    margin-right: 300px;
    width: 200px;
    text-align: left;
`;

const SecondaryText = styled.span`
`;

const TerrainPath = styled.path`
  fill: ${({ highlighted, isButtonHovered }) =>
    (highlighted || isButtonHovered) ? 'red' : '#72AEC4'};
  transition: fill 0.3s;
`;

const TribunePath = styled.path`
  fill: ${({ highlighted, isButtonHovered }) =>
    (highlighted || isButtonHovered) ? 'blue' : '#72AEC4'};
  transition: fill 0.3s;
`;

const CommentaryPath = styled.path`
  fill: ${({ highlighted, isButtonHovered }) =>
    (highlighted || isButtonHovered) ? 'green' : '#478EA6'};
  transition: fill 0.3s;
`;

const PressPath = styled.path`
  fill: ${({ highlighted, isButtonHovered }) =>
    (highlighted || isButtonHovered) ? 'pink' : '#72AEC4'};
  transition: fill 0.3s;
`;

const StadiumSvg = ({ highlightedZone, isButtonHovered }) => (
    <svg
    className="svg-icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M512 18.54464c272.51712 0 493.45536 220.928 493.45536 493.45536 0 272.51712-220.93824 493.45536-493.45536 493.45536C239.47264 1005.45536 18.54464 784.51712 18.54464 512 18.54464 239.47264 239.47264 18.54464 512 18.54464z"
      fill="#51BBA8"
    />
    <path
      d="M512 18.54464c-225.61792 0-415.72352 151.47008-474.53184 358.21568A491.29472 491.29472 0 0 1 256 325.74464c272.51712 0 493.45536 220.928 493.45536 493.45536 0 46.91968-6.68672 92.24192-18.92352 135.23968C893.40928 873.8304 1005.45536 706.02752 1005.45536 512 1005.45536 239.47264 784.51712 18.54464 512 18.54464z"
      fill="#459A8B"
    />
    <path
      d="M645.12 987.136a491.12064 491.12064 0 0 0 143.36-66.37568V103.23968a490.83392 490.83392 0 0 0-143.36-66.36544V987.136zM92.16 252.73344V771.2768a496.2304 496.2304 0 0 0 143.36 149.504V103.23968A495.95392 495.95392 0 0 0 92.16 252.73344zM501.76 18.80064c-49.9712 1.024-98.0992 9.43104-143.36 24.24832v937.90208a492.1344 492.1344 0 0 0 143.36 24.24832V18.80064z"
      fill="#4DAF9E"
    />
    <path
      d="M792.63744 512c0-154.99264-125.65504-280.63744-280.63744-280.63744-80.09728 0-152.30976 33.61792-203.43808 87.43936 50.3296-47.80032 118.31296-77.19936 193.19808-77.19936 154.99264 0 280.63744 125.65504 280.63744 280.63744 0 74.89536-29.3888 142.87872-77.19936 193.19808 53.82144-51.12832 87.43936-123.3408 87.43936-203.43808z"
      fill="#418A7E"
    />
    <path
      d="M788.46976 103.22944l-5.35552-3.4816a506.91072 506.91072 0 0 0-12.8512-8.23296l-8.8576-5.25312c-3.16416-1.85344-6.32832-3.6864-9.53344-5.4784a509.3376 509.3376 0 0 0-10.68032-5.76512l-7.53664-3.86048a484.6592 484.6592 0 0 0-12.6976-6.20544l-3.98336-1.792A493.04576 493.04576 0 0 0 645.12 36.864v479.0784C710.44096 599.62368 749.45536 704.8192 749.45536 819.2c0 46.88896-6.67648 92.18048-18.90304 135.14752l2.80576-1.37216c3.21536-1.61792 6.42048-3.26656 9.60512-4.95616l5.56032-3.00032c3.67616-2.01728 7.35232-4.05504 10.97728-6.16448l3.072-1.83296c8.8064-5.20192 17.4592-10.6496 25.89696-16.37376V103.22944zM358.4 336.44544a490.1888 490.1888 0 0 1 143.36 54.91712V18.80064c-49.9712 1.024-98.0992 9.43104-143.36 24.24832v293.39648z"
      fill="#429184"
    />
    <path d="M501.76 10.24h20.48v1013.76h-20.48V10.24z" fill="#C3E2DB" />
    <path
      d="M788.48 464.0768c-14.848-86.23104-68.9664-159.01696-143.36-199.17824v16.08704C727.30624 329.9328 782.39744 419.6352 782.39744 522.24a279.0912 279.0912 0 0 1-51.72224 162.22208l0.67584 2.38592A279.31648 279.31648 0 0 0 788.48 559.94368V464.0768zM358.4 277.25824v3.80928a278.92736 278.92736 0 0 1 143.36-39.46496v-9.97376a278.74304 278.74304 0 0 0-143.36 45.62944z"
      fill="#3D7F75"
    />
    <path
      d="M501.76 391.3728c6.94272 3.9936 13.76256 8.1408 20.48 12.46208v-385.024l-10.24-0.256-10.24 0.21504V391.3728z"
      fill="#A1BAB4"
    />
    <path
      d="M296.96 409.6H112.64v204.8h184.32a20.48 20.48 0 0 0 20.48-20.48V430.08a20.48 20.48 0 0 0-20.48-20.48z"
      fill="#51BBA8"
    />
    <path
      d="M727.04 409.6a20.48 20.48 0 0 0-20.48 20.48v163.84a20.48 20.48 0 0 0 20.48 20.48h184.32V409.6H727.04z"
      fill="#429184"
    />
    <path
      d="M512 419.84c50.90304 0 92.16 41.25696 92.16 92.16s-41.25696 92.16-92.16 92.16-92.16-41.25696-92.16-92.16 41.25696-92.16 92.16-92.16z"
      fill="#51BBA8"
    />
    <path
      d="M727.04 409.6a20.48 20.48 0 0 0-20.48 20.48v163.84a20.48 20.48 0 0 0 20.48 20.48h184.32V409.6H727.04z m163.84 184.32H727.04V430.08h163.84v163.84z"
      fill="#A1B6B3"
    />
    <path
      d="M296.96 409.6H112.64v204.8h184.32a20.48 20.48 0 0 0 20.48-20.48V430.08a20.48 20.48 0 0 0-20.48-20.48z m0 184.32H133.12V430.08h163.84v163.84z m215.04-153.6c39.51616 0 71.68 32.1536 71.68 71.68 0 39.51616-32.16384 71.68-71.68 71.68-39.5264 0-71.68-32.16384-71.68-71.68 0-39.5264 32.1536-71.68 71.68-71.68m0-20.48c-50.90304 0-92.16 41.25696-92.16 92.16s41.25696 92.16 92.16 92.16 92.16-41.25696 92.16-92.16-41.25696-92.16-92.16-92.16z"
      fill="#C3E2DB"
    />
    <TribunePath className="tribune"
      d="M512 30.72C246.20032 30.72 30.72 246.20032 30.72 512s215.48032 481.28 481.28 481.28 481.28-215.48032 481.28-481.28S777.79968 30.72 512 30.72z m0 761.91744c-154.99264 0-280.63744-125.6448-280.63744-280.63744S357.0176 231.36256 512 231.36256 792.63744 357.00736 792.63744 512c0 155.00288-125.6448 280.63744-280.63744 280.63744z"
      fill="#5CC5E8"
      highlighted={highlightedZone === 'tribune'}
      isButtonHovered={isButtonHovered === 'tribune'}
    />
    <TribunePath className="tribune"
      d="M993.28 512C993.28 246.20032 777.79968 30.72 512 30.72 295.60832 30.72 112.59904 173.54752 52.02944 370.05312A490.93632 490.93632 0 0 1 256 325.74464c14.96064 0 29.72672 0.77824 44.34944 2.08896 51.44576-59.0848 127.16032-96.47104 211.65056-96.47104 154.99264 0 280.63744 125.65504 280.63744 280.63744a279.41888 279.41888 0 0 1-61.25568 174.91968 492.31872 492.31872 0 0 1 3.3792 251.66848C888.38144 858.2144 993.28 697.3952 993.28 512z"
      fill="#4FA2BE"
      highlighted={highlightedZone === 'tribune'}
      isButtonHovered={isButtonHovered === 'tribune'}
    />
    <CommentaryPath className="espaceCommentateur"
    d="M460.8 839.68h102.4v143.36H460.8z" fill="#53ABC9" 
    highlighted={highlightedZone === 'espaceCommentateur'}
    isButtonHovered={isButtonHovered === 'espaceCommentateur'}
    />
    <CommentaryPath className="espaceCommentateur"
      d="M460.8 40.96h102.4v143.36H460.8z m378.88 419.84h143.36v102.4H839.68z"
      fill="#478EA6"
      highlighted={highlightedZone === 'espaceCommentateur'}
      isButtonHovered={isButtonHovered === 'espaceCommentateur'}
   />
    <CommentaryPath className="espaceCommentateur"
    d="M40.96 460.8h143.36v102.4H40.96z" fill="#53ABC9"
    highlighted={highlightedZone === 'espaceCommentateur'}
    isButtonHovered={isButtonHovered === 'espaceCommentateur'}
    />
    <path
      d="M512 0C229.23264 0 0 229.23264 0 512s229.23264 512 512 512 512-229.23264 512-512S794.76736 0 512 0z m0 952.32C268.82048 952.32 71.68 755.17952 71.68 512S268.82048 71.68 512 71.68s440.32 197.14048 440.32 440.32-197.14048 440.32-440.32 440.32z"
      fill="#F3F2F1"
    />
    <PressPath className="zonePresse"
      d="M512 71.68C268.82048 71.68 71.68 268.82048 71.68 512s197.14048 440.32 440.32 440.32 440.32-197.14048 440.32-440.32S755.17952 71.68 512 71.68z m0 798.72c-197.9392 0-358.4-160.4608-358.4-358.4s160.4608-358.4 358.4-358.4 358.4 160.4608 358.4 358.4-160.4608 358.4-358.4 358.4z"
      fill="#EBEBEA"
      highlighted={highlightedZone === 'zonePresse'}
      isButtonHovered={isButtonHovered === 'zonePresse'}
    />
    <path
      d="M501.76 153.6h20.48V0h-20.48v153.6z m0 870.4h20.48V870.4h-20.48v153.6zM153.6 501.76H0v20.48h153.6v-20.48z m716.8 0v20.48h153.6v-20.48H870.4zM142.72512 866.79552l14.47936 14.47936 108.60544-108.60544-14.47936-14.4896-108.60544 108.61568z m738.54976-709.59104l-14.47936-14.4896-108.60544 108.61568 14.47936 14.4896 108.60544-108.61568zM757.76 772.21888L866.18112 880.64 880.64 866.18112 772.21888 757.76 757.76 772.21888z m-614.4-614.4L251.78112 266.24 266.24 251.78112 157.81888 143.36 143.36 157.81888z"
      fill="#E5E5E4"
    />
    <path
      d="M815.95392 830.4128L866.18112 880.64 880.64 866.18112l-50.2272-50.2272c-4.7104 4.92544-9.53344 9.74848-14.45888 14.45888zM143.36 157.81888l50.2272 50.2272c4.7104-4.92544 9.53344-9.74848 14.45888-14.45888L157.81888 143.36 143.36 157.81888z m723.27168-14.91968l-50.688 50.688c4.93568 4.7104 9.76896 9.54368 14.47936 14.47936l50.688-50.688a521.74848 521.74848 0 0 0-14.47936-14.47936zM157.37856 881.11104l50.688-50.688a448.96256 448.96256 0 0 1-14.47936-14.47936l-50.688 50.688c4.73088 4.9152 9.55392 9.74848 14.47936 14.47936zM501.76 71.936L512 71.68l10.24 0.256v-71.68L512 0l-10.24 0.256v71.68z m20.48 880.128L512 952.32l-10.24-0.256v71.68l10.24 0.256 10.24-0.256v-71.68zM952.064 501.76L952.32 512l-0.256 10.24h71.68l0.256-10.24-0.256-10.24h-71.68z m-880.128 20.48L71.68 512l0.256-10.24h-71.68L0 512l0.256 10.24h71.68z"
      fill="#EDECEA"
    />
    <TerrainPath className="terrain"
      d="M512 807.99744c163.20512 0 295.99744-132.78208 295.99744-295.99744 0-163.21536-132.79232-295.99744-295.99744-295.99744-163.21536 0-295.99744 132.78208-295.99744 295.99744 0 163.21536 132.78208 295.99744 295.99744 295.99744m0-15.36c-154.99264 0-280.63744-125.6448-280.63744-280.63744S357.0176 231.36256 512 231.36256 792.63744 357.00736 792.63744 512c0 155.00288-125.6448 280.63744-280.63744 280.63744z"
      fill="#87D4EE"
      highlighted={highlightedZone === 'terrain'}
      isButtonHovered={isButtonHovered === 'terrain'}
    />
    <path
      d="M780.3904 593.92h-7.31136a279.97184 279.97184 0 0 1-6.21568 20.48h6.41024a282.624 282.624 0 0 0 7.1168-20.48z m-13.54752-163.84h13.6192a278.2208 278.2208 0 0 0-7.17824-20.48h-14.46912c2.92864 6.69696 5.60128 13.52704 8.02816 20.48z"
      fill="#8B9F9D"
    />
    <TerrainPath className="terrain"
      d="M736.0512 705.09568c44.77952-51.87584 71.94624-119.3472 71.94624-193.09568 0-163.21536-132.79232-295.99744-295.99744-295.99744-92.98944 0-176.04608 43.13088-230.35904 110.40768 6.27712 0.32768 12.4928 0.8704 18.70848 1.42336 51.44576-59.0848 127.16032-96.47104 211.65056-96.47104 154.99264 0 280.63744 125.65504 280.63744 280.63744a279.41888 279.41888 0 0 1-61.25568 174.91968c1.66912 6.02112 3.2256 12.0832 4.66944 18.176z"
      fill="#72AEC4"
      highlighted={highlightedZone === 'terrain'}
      isButtonHovered={isButtonHovered  === 'terrain'}
    />
  </svg>
);

const Stadium = () => {
    
    const [highlightedZone, setHighlightedZone] = useState(null);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const handleZoneClick = (zone) => {
        setHighlightedZone(zone);
    };

    const handleButtonHover = (isHovered) => {
        setIsButtonHovered(isHovered);
      };

  return (
    <Container>
        <Header/>
        <UnderHeader
            team1="FRANCE"
            team2="NEW ZEALAND"
            subtitle="08.09.2023 - 21:15 • STADE DE FRANCE"
            logo1={FranceLogo}
            logo2={NewZealandLogo}
        />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StadiumSvg 
            highlightedZone={highlightedZone} isButtonHovered={isButtonHovered} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: "#19194B", margin: "-400px 0 0"}}>
      <CategoryTitle>Sélectionnez une catégorie</CategoryTitle>
      <ZoneButton
          onClick={() => handleZoneClick('Terrain')}
          onMouseEnter={() => handleButtonHover('terrain')}
          onMouseLeave={() => handleButtonHover(false)}
        >
            <ColorBand color='red' />
            <ButtonText>Terrain</ButtonText>
            <SecondaryText>Disponible</SecondaryText>
        </ZoneButton>
        <ZoneButton
          onClick={() => handleZoneClick('Zone Presse')}
          onMouseEnter={() => handleButtonHover('zonePresse')}
          onMouseLeave={() => handleButtonHover(false)}
        >
            <ColorBand color='pink' />
            <ButtonText>Zone presse</ButtonText>
            <SecondaryText>Disponible</SecondaryText>
        </ZoneButton>
        <ZoneButton
          onClick={() => handleZoneClick('Tribune')}
          onMouseEnter={() => handleButtonHover('tribune')}
          onMouseLeave={() => handleButtonHover(false)}
        >
            <ColorBand color='blue' />
            <ButtonText>Tribune</ButtonText>
            <SecondaryText>Disponible</SecondaryText>
        </ZoneButton>
        <ZoneButton
            onClick={() => handleZoneClick('Espace commentateur')}
            onMouseEnter={() => handleButtonHover('espaceCommentateur')}
            onMouseLeave={() => handleButtonHover(false)}
            >
            <ColorBand color='green' />
            <ButtonText>Espace commentateur</ButtonText>
            <SecondaryText>Disponible</SecondaryText>
        </ZoneButton>
      </div>
    </Container>
  );
};

export default Stadium;
