import RootRedirect from "@/components/RootRedirect";

/** The bare origin redirects to the default locale (e.g. / -> /en). */
export default function RootPage() {
  return <RootRedirect />;
}
