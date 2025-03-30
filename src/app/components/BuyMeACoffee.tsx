import Link from "next/link";

export default function BuyMeACoffee() {
    return (
        <div>
            
            <Link className="bmc-button btn btn-accent text-lg font-bold btn-block hover:btn-neutral" href="https://www.buymeacoffee.com/chris.is.coding">
                Buy Me a Coffee
            </Link>
        </div>
    );
}
