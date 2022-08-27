import {ConnectButton} from "@web3uikit/web3";

export default function Header() {
  return (
    <div className=" p-5 border-b-2 flex flex-row">
      <h1 classNme="py-4 px-4 font-blog text-3xl">Decentrilized Lottery</h1>
      <div calssName="ml-auto py-2 px-4">
      <ConnectButton moralisAuth={false}/>
      </div>
    </div>
  );
}
