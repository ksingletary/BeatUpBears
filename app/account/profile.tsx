import Image from "next/image";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Profile({ user, pagetype }: Props) {
  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-6 bg-blackLight rounded-lg font-bold text-5xl text-white">
      Hello {user?.name}!
    </div>
  ) : null;

  const highResImage = user?.image?.replace('_normal', '_400x400');

  const userImage = highResImage ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={highResImage}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority
    />
  ) : null;

  return (
    <section className="flex flex-col items-center gap-4 bg-blackLight p-6 rounded-lg shadow-lg">
      {greeting}
      {userImage}
      <p className="text-2xl text-center text-white">{pagetype} Page!</p>
    </section>
  );
}