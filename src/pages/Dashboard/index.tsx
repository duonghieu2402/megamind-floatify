import { Layout, Page } from "@shopify/polaris";
import { DashboardStyled } from "./styled";
import AppStatus from "./components/AppStatus";
import GroupButtons from "./components/GroupButtons";
import ClickReport from "./components/ClickReport";

function Dashboard(): JSX.Element {
  return (
    <DashboardStyled>
      <Page title="Hi My Store" subtitle="Welcome">
        <Layout>
          <Layout.Section>
            <AppStatus />
          </Layout.Section>
          <Layout.Section>
            <GroupButtons />
          </Layout.Section>
          <Layout.Section>
            <ClickReport />
          </Layout.Section>
        </Layout>
      </Page>
    </DashboardStyled>
  );
}

export default Dashboard;
