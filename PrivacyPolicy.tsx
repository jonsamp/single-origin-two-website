import React, { Component } from 'react';
import { Text, TextStyle, View, TouchableOpacity } from 'react-native';
import type from './constants/type';
import colors from './constants/colors';

type PrivacyPolicyType = {
  onBack: () => void;
};

class PrivacyPolicy extends Component<PrivacyPolicyType> {
  render() {
    const { onBack } = this.props;
    const theme = colors.light;
    const paragraph = { color: theme.foreground, marginBottom: 16 };

    return (
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              backgroundColor: theme.foreground,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 4,
              marginBottom: 16,
            }}
            onPress={onBack}
          >
            <Text style={[type.headline, { color: theme.background }]}>
              ← Home
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[type.title, paragraph] as TextStyle}>Privacy Policy</Text>

        <Text style={[type.body, paragraph] as TextStyle}>
          This privacy policy governs your use of the software application
          Single Origin (“Application”) for mobile devices that was created by
          Jon Samp. Please read this policy and our Mobile Terms and Conditions
          carefully; by using the App you confirm to have understood and agreed
          to them.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          What information does the Application obtain and how is it used?
        </Text>
        <Text style={[type.headline, paragraph] as TextStyle}>
          User Provided Information
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          The Application obtains the information you provide when you download
          and register the Application. Registration with us is optional.
          However, please keep in mind that you may not be able to use some of
          the features offered by the Application unless you register with us.
          {'\n\n'}
          When you register with us and use the Application, you generally
          provide (a) your name, email address, user name, password and other
          registration information, such as country and city of residence; (b)
          transaction-related information, such as when you make purchases,
          respond to any offers, or download or use applications from us; (c)
          information you provide us when you contact us for help; (d) credit
          card information for purchase and use of the Application, and; (e)
          information you enter into our system when using the Application, such
          as contact information and project management information. {'\n\n'}
          We may also use the information you provided us to contact your from
          time to time to provide you with important information, required
          notices and marketing promotions.
        </Text>
        <Text style={[type.headline, paragraph] as TextStyle}>
          Automatically Collected Information
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          In addition, the Application may collect certain information
          automatically, including, but not limited to, the type of mobile
          device you use, your mobile devices unique device ID, your mobile
          operating system, the type of mobile Internet browsers you use, and
          information about the way you use the Application.
          {'\n\n'}
          Single Origin collects statistical data to help to ensure the
          Application is free of bugs and devise any suggestions to improve the
          overall user experience. The data is strictly limited to the nature of
          the use of the Application, such as interacting with the Application's
          user interface and browsing and interacting with media content
          rendered within the Application.
          {'\n\n'}
          In an event of an Application bug, we may collect some diagnostical
          information about your mobile device, like the amount of available
          memory, the date and time and any information entered into the
          Application at the time of the software crash that.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          Does the Application collect precise real time location information of
          the device?
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          This Application does not collect precise, real-time information about
          the location of your mobile device using either IP address or GPS
          (Global Positioning System). However we do collect IP address
          information provided to us by your ISP (Internet Service Provider) and
          locate the general information such as Country and City. This data is
          stored annonymously in compliance with the data retention period.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          Do third parties see and/or have access to information obtained by the
          Application?
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          Only aggregated, anonymized data is periodically transmitted to
          external services to help us improve the Application and our service.
          We will share your information with third parties only in the ways
          that are described in this privacy statement.
          {'\n\n'}
          We may disclose User Provided and Automatically Collected Information:
          {'\n\n'}• as required by law, such as to comply with a subpoena, or
          similar legal process;
          {'\n\n'}• when we believe in good faith that disclosure is necessary
          to protect our rights, protect your safety or the safety of others,
          investigate fraud, or respond to a government request;
          {'\n\n'}• with our trusted services providers who work on our behalf,
          do not have an independent use of the information we disclose to them,
          and have agreed to adhere to the rules set forth in this privacy
          statement. {'\n\n'}
          If Jon Samp is involved in a merger, acquisition, or sale of all or a
          portion of its assets, you will be notified via email and/or a
          prominent notice on our Web site of any change in ownership or uses of
          this information, as well as any choices you may have regarding this
          information.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          What are my opt-out rights?
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          You can stop all collection of information by the Application easily
          by uninstalling the Application. You may use the standard uninstall
          processes as may be available as part of your mobile device or via the
          mobile application marketplace or network. You can also opt-out from
          any kind of statistical data that may be stored about your use of the
          mobile application by simply reviewing your Data Sharing inside the
          Application's Settings screen.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          Data Retention Policy, Managing Your Information
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          We will retain User Provided data for as long as you use the
          Application and no longer that is essential in compliance to law.
          {'\n\n'}
          We will retain Automatically Collected Information for up to 12 months
          and thereafter may store it in an aggregate. The aggregation of the
          data aims to diminish any personal informations and provide a general
          overview of the statistical data about the use of the Application by a
          large group of audience.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          What are your rights over your personal data?
        </Text>
        <Text style={[type.headline, paragraph] as TextStyle}>
          An overview of your different rights
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          You have the right to request:
          {'\n\n'}
          Access to the personal data we hold about you, free of charge in most
          cases. The correction of your personal data when incorrect, out of
          date or incomplete. For example, when you withdraw consent, or object
          and we have no legitimate overriding interest, or once the purpose for
          which we hold the data has come to an end (such as the end of a
          warranty). That we stop using your personal data for direct marketing
          (either through specific channels, or all channels).
          {'\n\n'}
          That we stop any consent-based processing of your personal data after
          you withdraw that consent. Review by a Partner of any decision made
          based solely on automatic processing of your data (i.e. where no human
          has yet reviewed the outcome and criteria for the decision). You have
          the right to request a copy of any information about you that the
          Group holds at any time, and also to have that information corrected
          if it is inaccurate. To ask for your information, please contact Data
          Manager sampjon@gmail.com. To ask for your information to be amended,
          please update your online account, or contact our Support team.
          {'\n\n'}
          If we choose not to action your request we will explain to you the
          reasons for our refusal.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          Your right to withdraw consent
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          Whenever you have given us your consent to use your personal data, you
          have the right to change your mind at any time and withdraw that
          consent.
        </Text>
        <Text style={[type.headline, paragraph] as TextStyle}>
          Where we rely on our legitimate interest
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          In cases where we are processing your personal data on the basis of
          our legitimate interest, you can ask us to stop for reasons connected
          to your individual situation. We must then do so unless we believe we
          have a legitimate overriding reason to continue processing your
          personal data.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          Checking your identity
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          To protect the confidentiality of your information, we will ask you to
          verify your identity before proceeding with any request you make under
          this Privacy Policy. If you have authorised a third party to submit a
          request on your behalf, we will ask them to prove they have your
          permission to act.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>Security</Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          We are concerned about safeguarding the confidentiality of your
          information. We provide physical, electronic, and procedural
          safeguards to protect information we process and maintain. For
          example, we limit access to this information to authorized employees
          and contractors who need to know that information in order to operate,
          develop or improve our Application. Please be aware that, although we
          endeavor provide reasonable security for information we process and
          maintain, no security system can prevent all potential security
          breaches.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>Changes</Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          This Privacy Policy may be updated from time to time for any reason.
          We will notify you of any changes to our Privacy Policy by posting the
          new Privacy Policy located at
          https://www.singleoriginapp.com/privacy-policy.html. You are advised
          to consult this Privacy Policy regularly for any changes, as continued
          use is deemed approval of all changes.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          Your Consent
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          By using the Application, you are consenting to our processing of your
          information as set forth in this Privacy Policy now and as amended by
          us. "Processing,” means using cookies on a computer/hand held device
          or using or touching information in any way, including, but not
          limited to, collecting, storing, deleting, using, combining and
          disclosing information, all of which activities will take place in the
          United Kingdom. If you reside outside the United Kingdom your
          information will be transferred, processed and stored there under
          United Kingdom privacy standards.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          California Online Privacy Protection Act Compliance
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          We comply with the California Online Privacy Protection Act. We
          therefore will not distribute your personal information to outside
          parties without your consent.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          Children’s Online Privacy Protection Act Compliance
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          We never collect or maintain information at our website from those we
          actually know are under 16, and no part of our website is structured
          to attract anyone under 16.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          Information for European Union Customers
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          By using Single Origin and providing your information, you authorize
          us to collect, use, and store your information outside of the European
          Union.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>
          International Transfers of Information
        </Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          Information may be processed, stored, and used outside of the country
          in which you are located. Data privacy laws vary across jurisdictions,
          and different laws may be applicable to your data depending on where
          it is processed, stored, or used.
        </Text>

        <Text style={[type.headline, paragraph] as TextStyle}>Contact us</Text>
        <Text style={[type.body, paragraph] as TextStyle}>
          If you have any questions regarding privacy while using the
          Application, or have questions about our practices, please contact us
          via email at sampjon@gmail.com
        </Text>
      </View>
    );
  }
}

export default PrivacyPolicy;
