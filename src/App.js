import './App.css';
import {Route, Switch} from "react-router-dom";
import LandingPage from "./pages/home/landing-page";
import AboutPage from "./pages/about/about-page";
import ChangePasswordPage from "./pages/account/change-password-page";
import RegisterPage from "./pages/authentication/register-page";
import ContactPage from "./pages/contact/contact-page";
import ContactsPage from "./pages/contacts/contacts-page";
import DashboardPage from "./pages/dashboard/dashboard-page";
import GroupsPage from "./pages/groups/groups-page";
import SendMessagePage from "./pages/messages/send-message-page";
import PricingPage from "./pages/pricing/pricing-page";
import TermsAndConditionsPage from "./pages/terms-and-conditions/terms-and-conditions-page";
import ReportsPage from "./pages/reports/reports-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import ForgotPasswordPage from "./pages/authentication/forgotten-password-page";
import PaymentsPage from "./pages/payments/payments-page";

function App() {
    return (
        <Switch>
            <Route path="/" exact={true} component={LandingPage}/>
            <Route path="/about" exact={true} component={AboutPage}/>
            <Route path="/change-password" exact={true} component={ChangePasswordPage}/>
            <Route path="/forgot-password" exact={true} component={ForgotPasswordPage}/>
            <Route path="/reset" exact={true} component={ResetPasswordPage}/>
            <Route path="/signup" exact={true} component={RegisterPage}/>
            <Route path="/contact" exact={true} component={ContactPage}/>
            <Route path="/contacts" exact={true} component={ContactsPage}/>
            <Route path="/dashboard" exact={true} component={DashboardPage}/>
            <Route path="/groups" exact={true} component={GroupsPage}/>
            <Route path="/send" exact={true} component={SendMessagePage}/>
            <Route path="/pricing" exact={true} component={PricingPage}/>
            <Route path="/payments" exact={true} component={PaymentsPage}/>
            <Route path="/reports" exact={true} component={ReportsPage}/>
            <Route path="/terms" exact={true} component={TermsAndConditionsPage}/>
        </Switch>
    );
}

export default App;
