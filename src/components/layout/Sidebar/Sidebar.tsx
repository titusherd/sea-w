import "./Sidebar.css"
import {
    LayoutDashboard,
    ArrowRightLeft,
    Send,
    Plus,
    LogOut,
    ArrowLeftFromLine,
    ArrowRightFromLine,
    // Eye,
    // EyeOff,
    // Minus,
    Info
} from 'lucide-react';
import {useState} from "react";

const navItems = [
    {id: 1, label: "Dashboard", icon: LayoutDashboard},
    {id: 2, label: "Transaction", icon: ArrowRightLeft},
    {id: 3, label: "Transfer", icon: Send},
    {id: 4, label: "Top Up", icon: Plus},
    {id: 5, label: "Logout", icon: LogOut}
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const [isShowBalance, setIsShowBalance] = useState(false)
    const [isActiveTab, setIsActiveTab] = useState("convert")
    const [amount, setAmount] = useState(1);

    const currencies = [
        {code: 'USD', value: 1, sell: 15175.50, buy: 15024.50},
        {code: 'EUR', value: 1, sell: 16943.45, buy: 16773.35},
        {code: 'JPY', value: 100, sell: 10562.75, buy: 10456.92},
        {code: 'SGD', value: 1, sell: 11750.29, buy: 11632.47},
        {code: 'CNY', value: 1, sell: 2151.79, buy: 2130.23},
        {code: 'GBP', value: 1, sell: 20209.21, buy: 20006.62}
    ];

    const handleConvert = (amount: number): number => {
        return amount * 15024.50
    }

    return (
        <div className="container">
            <aside className={isOpen ? "sidebar_close" : "sidebar_open"}>
                <h1 className="logo text-bold">Sea Wallet</h1>
                <ul className="nav-bar">
                    {navItems.map(({id, label, icon: Icon}) => (
                        <li className="nav-link text-bold" key={id}>
                            <Icon className="icon"/>
                            <span className={isOpen ? "label-hide" : ""}>{label}</span>
                        </li>))}
                </ul>
                {isOpen ?
                    <ArrowRightFromLine className="nav-button" onClick={() => setIsOpen(prev => !prev)}/>
                    :
                    <ArrowLeftFromLine className="nav-button" onClick={() => setIsOpen(prev => !prev)}/>
                }
            </aside>

            <div className="content">
                {/*<header>*/}
                {/*    <h1>Dashboard</h1>*/}
                {/*    <div className="profile-picture" onClick={() => setIsModalOpen(true)}></div>*/}
                {/*</header>*/}


                <main>
                    {/*    <h3>Hello Wibowo!</h3>*/}
                    {/*    <div className="widget-bar">*/}
                    {/*        <div className="widget-card">*/}
                    {/*            <div className="balance">*/}
                    {/*                <p>Balance</p>*/}
                    {/*                {isShowBalance ?*/}
                    {/*                    <Eye onClick={() => setIsShowBalance(prev => !prev)}/> :*/}
                    {/*                    <EyeOff onClick={() => setIsShowBalance(prev => !prev)}/>*/}
                    {/*                }*/}
                    {/*            </div>*/}
                    {/*            <div className="amount">*/}
                    {/*                <p>IDR <span>{isShowBalance ? '17,500,000' : '*******'}</span></p>*/}
                    {/*            </div>*/}
                    {/*            <p>26897890</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="widget-card">*/}
                    {/*            <div>*/}
                    {/*                <Plus/>*/}
                    {/*                <p>IDR 120,000</p>*/}
                    {/*                <p>Income - April 2024 </p>*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="widget-card">*/}
                    {/*            <Minus/>*/}
                    {/*            <p>IDR 120,000</p>*/}
                    {/*            <p>Expense - April 2024 </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    <div className="currency-converter">
                        <h2 className="text-bold">Exchange Rates</h2>
                        <div className="tabs">
                            <button onClick={() => setIsActiveTab("convert")}
                                    className="convert-button text-medium active">Convert
                            </button>
                            <button onClick={() => setIsActiveTab("rates")}
                                    className="convert-button text-medium">Rates
                            </button>
                        </div>
                    </div>
                    <div className="active-tab">
                        {isActiveTab === "convert" && (
                            <div className="convert-container">
                                <div className="convert-input">
                                    <div className="input">
                                        <label htmlFor="amount" className="text-regular">Amount</label>
                                        <input type="number" id="amount" placeholder="1"
                                               onChange={e => setAmount(Number(e.target.value))}/>
                                    </div>
                                    <div className="input">
                                        <label htmlFor="from" className="text-regular">From</label>
                                        <select name="from" id="">
                                            <option value="usd">USD - US Dollar</option>
                                            <option value="idr">IDR - Indonesian Rupiah</option>
                                        </select>
                                    </div>
                                    <button><ArrowRightLeft className="icon"/></button>
                                    <div className="input">
                                        <label htmlFor="to" className="text-regular">To</label>
                                        <select name="from" id="">
                                            <option value="usd">USD - US Dollar</option>
                                            <option value="idr">IDR - Indonesian Rupiah</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="text-regular">1 US Dollars =</p>
                                <p>IDR {handleConvert(amount)}</p>
                                <div>
                                    <Info/>
                                    <p>We use the mid-market rate for our Converter. This is for informational
                                        purposes
                                        only. You won’t receive this rate when sending money.</p>
                                </div>
                            </div>
                        )}
                        {isActiveTab === "rates" && (
                            <div>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>CURRENCIES</th>
                                        <th>VALUE</th>
                                        <th>SELL</th>
                                        <th>BUY</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currencies.map(({code, value, sell, buy}) => (
                                        <tr key={code}>
                                            <td>{code}</td>
                                            <td>{value}</td>
                                            <td>{sell}</td>
                                            <td>{buy}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            {/*{isModalOpen && (*/}
            {/*    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>*/}
            {/*        <div className="modal-container">*/}
            {/*            <img src="" alt="" className="profile-picture-modal"/>*/}
            {/*            <div className="profile-info">*/}
            {/*                <p className="profile-name">Wibowo Acong</p>*/}
            {/*                <p className="profile-email">wibowoacong@email.com</p>*/}
            {/*            </div>*/}
            {/*            <button className="edit-profile">Edit Profile</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}