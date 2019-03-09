import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


class Contact extends Component {
    static navigationOptions = {
        title: 'Contact'
    };

    render() {
        return (
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>

                <Card title="Contact Information">
                    <Text>121, Clear Water Bay Road </Text>
                    <Text>Clear water bay, kowloon</Text>
                    <Text>hong kong</Text>
                    <Text>tel:852 1234 5678</Text>
                    <Text>fax: 852 1234 5678</Text>
                    <Text>Email: confusion@sheinduru.net</Text>
                </Card>
            </Animatable.View>

        );
    }
}

export default Contact;