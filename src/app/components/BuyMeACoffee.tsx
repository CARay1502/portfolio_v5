import Script from "next/script";

export default function BuyMeACoffee() {
    return (
        <div>
            <script 
            type="text/javascript" 
            src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" 
            data-name="bmc-button" 
            data-slug="chris.is.coding" 
            data-color="#5F7FFF" data-emoji=""  
            data-font="Arial" 
            data-text="Buy me a coffee" 
            data-outline-color="#000000" 
            data-font-color="#ffffff" 
            data-coffee-color="#FFDD00" 
        />
            
            <a className="bmc-button btn btn-accent text-lg font-bold btn-block hover:btn-neutral" href="https://www.buymeacoffee.com/chris.is.coding">
                Buy Me a Coffee
            </a>
        </div>
    );
}