import "./Policy.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Policy() {
    return (
        <div style={{ height: "100vh" }}>
            <Header />
            <div className="row justify-content-left px-4">
                <div className="col-12 text-warning my-5 mx-2">Security Policies</div>
                <div className="col-12 text-light my-2">
                    Introduction
                    <br /><br />
                    Welcome to our Security and Policies page. Transparency and security are our top priorities. Here,
                    you’ll find all the details about how we handle your data, protect your privacy, and operate the features on our website, including our password manager, password generator, and password testing tools.
                    Please read this carefully to understand your rights and our responsibilities.
                </div>
                <div className="col-12 text-primary my-4">Privacy Policy</div>
                <div className="col-12 text-light">
                    We value your privacy and are committed to protecting your personal information.
                    <br />
                    1. Data Collection
                    <br />
                    We collect minimal personal data such as your email address and password when you sign up or log in.
                    No additional personal information is required unless explicitly stated.
                    <br />
                    2. Purpose of Data Use
                    <br />
                    We use your data solely for authentication and account management.
                    Your passwords and emails are stored securely to ensure you can access them when needed.
                    <br />
                    3. Password Storage
                    <br />
                    Passwords stored in our platform are encrypted using state-of-the-art hashing techniques (e.g., bcrypt) and cannot be accessed in plaintext by anyone, including us.
                    <br />
                    4. Data Sharing
                    <br />
                    We do not share your personal data with third parties for advertising or marketing purposes.
                    Data may only be shared if legally required (e.g., to comply with a court order).
                    <br />
                    5. Cookies
                    <br />
                    We use cookies to enhance your browsing experience, such as keeping you logged in.
                    These cookies do not collect personal data.
                    <br />
                    6. User Rights
                    <br />
                    You have the right to access, modify, or delete your account information at any time.
                    If you have questions or concerns about your data, please contact us.
                </div>
                <div className="col-12 text-primary my-4">Terms of Service</div>
                <div className="col-12 text-light my-2">
                    By using our website, you agree to the following terms:
                    <br />
                    1. Account Use
                    <br />
                    You are responsible for providing accurate and truthful information when signing up.
                    It is your responsibility to keep your login credentials secure and confidential.
                    <br />
                    2. Prohibited Actions
                    <br />
                    Misusing the password manager or password generation/testing tools is strictly prohibited.
                    Attempting to breach or compromise our website’s security systems will result in immediate account termination and possible legal action.
                    <br />
                    3. Liability Disclaimer
                    <br />
                    We are not responsible for any loss resulting from user negligence, such as sharing login credentials or failing to secure generated passwords.
                    Passwords generated or tested on this website are for convenience, and users are responsible for securing their accounts.
                </div>
                <div className="col-12 text-primary my-4">Security Policy</div>
                <div className="col-12 text-light my-2">
                    1. Encryption
                    <br />
                    All sensitive data, such as stored passwords and emails, are encrypted using secure methods.
                    Passwords are hashed with advanced algorithms (e.g., bcrypt) to prevent unauthorized access.
                    <br />
                    2. Password Generation and Testing Tools
                    <br />
                    Passwords generated or tested on this website are not saved to any database or server.
                    These tools process data locally or temporarily in memory, ensuring no retention.
                    <br />
                    3. Regular Updates
                    <br />
                    Our platform undergoes regular security updates to address vulnerabilities and improve overall security.
                </div>
                <div className="col-12 text-primary my-4">Password Management and Generation Policy</div>
                <div className="col-12 text-light my-2">
                    1. Stored Passwords
                    <br />
                    All stored passwords are encrypted and cannot be accessed as plaintext by anyone.
                    We recommend using unique passwords for all your accounts.
                    <br />
                    2. Generated and Tested Passwords
                    <br />
                    Passwords generated or tested using our tools are not saved, logged, or monitored.
                    These tools are designed to operate in a secure environment to ensure your privacy.
                    <br />
                    3. User Responsibility
                    <br />
                    Users should follow best practices for password security, including creating strong, unique passwords and enabling two-factor authentication (2FA) wherever possible.
                </div>
                <div className="col-12 text-primary my-4">Data Breach Policy</div>
                <div className="col-12 text-light my-2">
                    We take data breaches very seriously and have a protocol in place to handle such events:
                    <br />
                    1. Notification
                    <br />
                    In the event of a data breach, affected users will be notified promptly via email or another direct communication method.
                    <br />
                    2. Mitigation Steps
                    <br />
                    We will take immediate steps to secure our systems and mitigate damage, including resetting passwords and addressing vulnerabilities.
                    <br />
                    3. Preventive Measures
                    <br />
                    Regular security audits and testing are conducted to minimize the likelihood of a breach.
                </div>
                <div className="col-12 text-primary my-4">Contact Information</div>
                <div className="col-12 text-light my-2">
                    If you have any questions or concerns about these policies or your data,
                    <br />
                    please feel free to reach out to us:
                    <br />
                    Email: [support@yourwebsite.com]
                    <br />
                    Contact Form: Visit the Contact Us page on our website
                </div>
                <div className="col-12 text-light my-2">
                    By using this website, you agree to these policies. We reserve the right to update these policies at any time, and changes will be communicated to all users.
                    <br />
                    Thank you for trusting us to manage your data securely.
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Policy;
