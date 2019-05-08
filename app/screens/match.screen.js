import React, {Component} from 'react';
import {
    Header, 
    Container,
    Content,
    Icon,
    Button,
    Left, Right,
    Body,
    Text,
    Title, Footer, FooterTab
} from 'native-base';
import {inject} from 'mobx-react';
import  Match from '../components/match.component';

@inject("stores")
export default class MatchScreen extends Component {
    constructor(props){
        super(props);        
    }

    static navigationOptions = ({navigation}) => ({
        headerLeft: <Button transparent onPress={() => navigation.navigate('Post')}>
                <Icon name='menu' style={{color: '#000'}} size={28} />
            </Button>
    })

    render () {
        return (
            <Container fluid>
                 <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>RUBY-TH</Title>
                    </Body>
                    <Right />
                </Header>

                <Content scrollEnabled={true} style={{backgroundColor: "#EEE"}}>
                    <Match stores={this.props.stores}/>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>            
        )
    }
}

