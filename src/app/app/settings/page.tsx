import { auth } from "@/server/auth";
import { 
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "../../components/dashboard/page-component";


export default async function Page() {
  const session = await auth()
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Settings</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>Setings</h1>
      </DashboardPageMain>
    </DashboardPage>
  )
}  