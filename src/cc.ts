// import { Bitcoin, Polkadot } from 'cryptocurrency-icons'
import Bitcoin from "cryptocurrency-icons/svg/color/btc.svg";
import Dot from "cryptocurrency-icons/svg/color/dot.svg";
import Ethereum from "cryptocurrency-icons/svg/color/eth.svg";
import Tron from "cryptocurrency-icons/svg/color/trx.svg";
import Tether from "cryptocurrency-icons/svg/color/usdt.svg";
import Cosmos from "cryptocurrency-icons/svg/color/atom.svg";
import Theta from "cryptocurrency-icons/svg/color/theta.svg";
import Icon from "cryptocurrency-icons/svg/color/icx.svg";
import Dash from "cryptocurrency-icons/svg/color/dash.svg";
import Filecoin from "cryptocurrency-icons/svg/color/fil.svg";
import XRP from "cryptocurrency-icons/svg/color/xrp.svg";
import Tezos from "cryptocurrency-icons/svg/color/xtz.svg";
import Ampleforth from "cryptocurrency-icons/svg/color/ampl.svg";
import Aragon from "cryptocurrency-icons/svg/color/ant.svg";

const currencies = [
    { ticker: "BTC", label: "Bitcoin", value: 0, price: 58364.65, icon: Bitcoin},
    { ticker: "DOT", label: "Polkadot", value: 1, price: 43.39, icon: Dot},
    { ticker: "ETH", label: "Ethereum", value: 2, price: 2069.28, icon: Ethereum},
    { ticker: "TRX", label: "Tron", value: 3, price: .12, icon: Tron},
    { ticker: "USDT", label: "Tether", value: 4, price: 1.00, icon: Tether},
    { ticker: "ATOM", label: "Cosmos", value: 5, price: 21.61, icon: Cosmos},
    { ticker: "THETA", label: "Theta", value: 6, price: 11.78, icon: Theta},
    { ticker: "ICX", label: "Icon", value: 7, price: 2.67, icon: Icon},
    { ticker: "DASH", label: "Dash", value: 8, price: 262.25, icon: Dash},
    { ticker: "FIL", label: "Filecoin", value: 9, price: 181.91, icon: Filecoin},
    { ticker: "XRP", label: "XRP", value: 10, price: .61, icon: XRP},
    { ticker: "XTZ", label: "Tezos", value: 11, price: 5.10, icon: Tezos},
    { ticker: "AMPL", label: "Ampleforth", value: 12, price: 1.03, icon: Ampleforth},
    { ticker: "ANT", label: "Aragon", value: 13, price: 11.32, icon: Aragon},
]

export default currencies