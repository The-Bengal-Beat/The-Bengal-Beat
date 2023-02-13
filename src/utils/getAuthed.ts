import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";

export const getAuthed: GetServerSideProps<any> = async ({ req, res }) => {
  const session = await getServerSession(req, res, {});

  // Redirect to sign-in page if not logged in
  if (!session) {
    return {
      redirect: {
        destination:"/auth/sign-in"
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}