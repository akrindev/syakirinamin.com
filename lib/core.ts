interface Users {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async <Users>() => {
  const users = await require("../public/peopls.json").data;

  // const users = await fetch("http://0.0.0.0:3000/peopls.json").then((res) =>
  //   res.json()
  // );

  return users;
};
