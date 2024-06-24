
import Page1 from './Components/page1';
export const fetchCache = "force-no-store";
export const dynamic = 'force-static';
export default function Home() {
  return (
    <Page1 />
  )
}
