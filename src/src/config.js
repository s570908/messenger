import { IMLocalized, setI18nConfig } from './Core/localization/IMLocalization';

setI18nConfig();

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;

const ChatConfig = {
  isSMSAuthEnabled: true,
  appIdentifier: 'rn-messenger-android',
  onboardingConfig: {
    welcomeTitle: 'Instachatty',
    welcomeCaption: IMLocalized('Send texts, photos, videos, and audio messages to your close friends.'),
    walkthroughScreens: [
      {
        icon: require("../assets/icons/private-chat-icon.png"),
        title: "Private Messages",
        description: IMLocalized("Communicate with your friends via private messages.")
      },
      {
        icon: require("../assets/icons/chat-icon.png"),
        title: "Group Chats",
        description: IMLocalized("Create group chats and stay in touch with your gang.")
      },
      {
        icon: require("../assets/icons/photo-camera.png"),
        title: "Send Photos & Videos",
        description: IMLocalized("Have fun with your friends by sending photos and videos to each other.")
      },
      {
        icon: require("../assets/icons/notification.png"),
        title: "Get Notified",
        description: IMLocalized("Receive notifications when your friends are looking for you.")
      }
    ]
  },
  tosLink: "https://www.instamobile.io/eula-instachatty/",
  editProfileFields: {
    sections: [
      {
        title: IMLocalized("PUBLIC PROFILE"),
        fields: [
          {
            displayName: IMLocalized("First Name"),
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'firstName',
            placeholder: 'Your first name'
          },
          {
            displayName: IMLocalized("Last Name"),
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'lastName',
            placeholder: 'Your last name'
          }
        ]
      },
      {
        title: IMLocalized("PRIVATE DETAILS"),
        fields: [
          {
            displayName: IMLocalized("E-mail Address"),
            type: 'text',
            editable: false,
            key: 'email',
            placeholder: 'Your email address'
          },
          {
            displayName: IMLocalized("Phone Number"),
            type: 'text',
            editable: true,
            regex: regexForPhoneNumber,
            key: 'phone',
            placeholder: 'Your phone number'
          }
        ]
      }
    ]
  },
  userSettingsFields: {
    sections: [
      {
        title: IMLocalized("GENERAL"),
        fields: [
          {
            displayName: IMLocalized("Allow Push Notifications"),
            type: 'switch',
            editable: true,
            key: 'push_notifications_enabled',
            value: false,
          },
          {
            displayName: IMLocalized("Enable Face ID / Touch ID"),
            type: 'switch',
            editable: true,
            key: 'face_id_enabled',
            value: false
          }
        ]
      },
      {
        title: '',
        fields: [
          {
            displayName: IMLocalized("Save"),
            type: 'button',
            key: 'savebutton',
          }
        ]
      }
    ]
  },
  contactUsFields: {
    sections: [
      {
        title: IMLocalized("CONTACT"),
        fields: [
          {
            displayName: IMLocalized("Address"),
            type: 'text',
            editable: false,
            key: 'push_notifications_enabled',
            value: "142 Steiner Street, San Francisco, CA, 94115",
          },
          {
            displayName: IMLocalized("E-mail us"),
            value: 'florian@instamobile.io',
            type: 'text',
            editable: false,
            key: 'email',
            placeholder: 'Your email address'
          }
        ]
      },
      {
        title: '',
        fields: [
          {
            displayName: IMLocalized("Call Us"),
            type: 'button',
            key: 'savebutton',
          }
        ]
      }
    ]
  },
  contactUsPhoneNumber: "+16504859694"
};

export default ChatConfig;
