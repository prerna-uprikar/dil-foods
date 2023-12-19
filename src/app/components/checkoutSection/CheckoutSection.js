import styles from "./Checkout.module.scss"

export default function CheckoutSection() {

    return (
        <>
          <div className={styles.checkout}>
            <h1 className="text-[28px] fomt-[500]"> Confirm Your Order</h1>
            <form className="flex flex-col items-center gap-[30px] pt-[40px]">
                  <input type="text" className={styles.forminput} placeholder="Enter you Name" />
                  <input type="text" className={styles.forminput} placeholder="Enter you Adress" />
                  <input type="text" className={styles.forminput} placeholder="Enter you Pincode" />
                  <input type="text" className={styles.forminput} placeholder="Enter Mobile" />
            </form>
            <div className="pt-[40px]">
                <button className="text-white bg-[#e30217] px-[30px] py-[10px] gap-[10px] rounded-[6px]">Place Order</button>
            </div>
          </div>
        </>
    );
}