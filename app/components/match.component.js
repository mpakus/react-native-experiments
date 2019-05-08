import React, {Component} from 'react';
import {
    Container,
    Content, 
    Button, 
    Icon, 
    List,
    ListItem,
    Spinner,
    Left,
    Right,
    Body,
    Thumbnail
} from 'native-base';
import {StyleSheet, ListView, Text, Image, View} from 'react-native';
import { observer } from 'mobx-react/native';
import MatchStore from '../stores/match.store';
// import { observable } from 'mobx';

@observer
export default class Match extends Component {
    constructor(props){
        super(props);        
        // this.state = {
        //     _fetchingData: true,
        //     _fetchingDataErrors: null
        // }
    }

    componentDidMount() {
        const { matches } = this.props.stores;
        setTimeout( () => { matches.getData() }, 2000 )
    }
    

    // static getSubs(prop, state) {
    //     const {auth, matches} = props.stores;
    //     return auth.authUser ? matches.subs() : [];
    // }

    // subscribeSubs(subs, props, state) {
    //     const { matches } = props.stores;
    //     return matches.subscribeSubsWithPromise(subs);
    // }

    // markViewed(match) {
    //     this.props.stores.matches.markViewed(match[0]);
    // }

    renderMeeting(meeting) {
        if(meeting) {
            let image = { url: meeting.img };
            let title = meeting.name;

            return (
                <ListItem thumbnail noBorder>
                    <Left>
                        <Thumbnail square source={{ uri: image.url }} />
                    </Left>
                    <Body>
                        <Text>{title}</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="eye" />
                        </Button>
                    </Right>
                </ListItem>                
                // <Card>
                //     <CardItem cardBody>
                //         {pic.uri != undefined && pic.uri != "" ? <Image src={pic} style={styles.thumbnail}/> : null}
                //     </CardItem>
                //     <CardItem>
                //         <Text style={styles.text}>
                //             {text}
                //         </Text>
                //     </CardItem>
                // </Card>
            )
        }
        return null;
    }

    renderNoMoreCards(){
        return (
            <Text>No more Cards</Text>
            // <Card>
            //     <CardItem cardBody>
            //         <Text style={styles.text}>
            //             Out of Matches
            //         </Text>
            //     </CardItem>
            // </Card>
        )
    }

    render () {
        const {matches, auth} = this.props.stores;
        const user = auth.authUser;
        // const {_fetchingData, meetings} = matches;

        // if(_fetchingDataErrors) {
        //     return <Text style={{backgroundColor: "red"}}>{_fetchingDataErrors}</Text>
        // }

        const { meetings, fetchingData } = matches;
        // console.warn('meetings data', meetings);

        return (
            <View>
                { (fetchingData && !meetings) ? <Spinner/> : meetings && <List>{meetings.map((prop, key) => { return this.renderMeeting(prop); })}</List>
                // <Text>Bunch of Meetings</Text>
                
                // <DeckSwiper 
                //     dataSource={list}
                //     renderItem={(card) => this.renderCard(card, matches)}
                //     renderEmpty={this.renderNoMoreCards.bind(this)}
                //     looping={false}
                //     onSwipeRight={(item) => this.markedViewed(item)}
                //     onSwipeLeft={(item) => this.markedViewed(item)}
                //     >
                // </DeckSwiper>

            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    thumbnail: {
        width: 300,
        height: 300,
        flex: 1
    }
});
