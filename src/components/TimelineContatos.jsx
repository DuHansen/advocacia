import mapData from '@highcharts/map-collection/countries/br/br-all.geo.json';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highmaps from 'highcharts/modules/map';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

// Initialize Highmaps
Highmaps(Highcharts);

function TimelineContatos() {
    const mapOptions = {
        chart: {
            map: mapData,
            backgroundColor: '#102E4A', // Change the background color here
            style: {
                fontFamily: 'Arial',
                fontSize: '16px',
                color: '#607D8B'
            },
        },
        title: {
            text: 'Onde estamos',
            style: {
                fontFamily: 'Arial',
                fontSize: '16px',
                color: '#FFFFFF'
            },
        },
        subtitle: {
            text: 'Mapa do Brasil',
            style: {
                fontFamily: 'Arial',
                fontSize: '16px',
                color: '#FFFFFF'
            },
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
      
        series: [{
            data: [
                ['br-sp', 0],
                ['br-ma', 1],
                ['br-pa', 2],
                ['br-sc', 3],
                ['br-ba', 4],
                ['br-ap', 5],
                ['br-ms', 6],
                ['br-mg', 7],
                ['br-go', 8],
                ['br-rs', 9],
                ['br-to', 10],
                ['br-pi', 11],
                ['br-al', 12],
                ['br-pb', 13],
                ['br-ce', 14],
                ['br-se', 15],
                ['br-rr', 16],
                ['br-pe', 17],
                ['br-pr', 18],
                ['br-es', 19],
                ['br-rj', 20],
                ['br-rn', 21],
                ['br-am', 22],
                ['br-mt', 23],
                ['br-df', 24],
                ['br-ac', 25],
                ['br-ro', 26]
            ],
            name: 'Estado',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            showInLegend: false

        }]
    };

    return (
        <Container style={{backgroundColor:'#102E4A'}}>
        <Card style={{backgroundColor:'#102E4A', height:'20vh', border: 'black', borderCollapse: 'collapse'}}>
            <Card.Title style={{color:'#ffffff',backgroundColor:'#102E4A', border: 'none', justifyContent:'center', textAlign:'center'}}>Contatos</Card.Title>
            <Card style={{marginTop:"20vh"}}>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'mapChart'}
                    options={mapOptions}
                   
                />
            </Card>
        </Card>
        </Container>
    );
}

export default TimelineContatos;

