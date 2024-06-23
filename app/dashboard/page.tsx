import { auth, signOut } from "@/auth";

import { Button } from "@/components/ui/button";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default DashboardPage;
