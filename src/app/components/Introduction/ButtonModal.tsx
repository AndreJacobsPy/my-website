"use client";

import { type FunctionComponent, useState } from "react";
import styles from "./index.module.css";

const ButtonModal: FunctionComponent = () => {
  // state management for modal
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className={styles.modal}>
      <button className={styles.contactButton} onClick={() => setOpenModal(true)}>Get in Touch</button>

      {openModal && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
            onClick={() => setOpenModal(false)}
          />

          {/* center modal in viewport */}
          <div
            role="dialog"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-[24rem] max-w-[90%] bg-neutral-800/80 shadow rounded-lg p-6">
              <button
                className="absolute top-2 right-2 mb-4 px-3 py-1 bg-neutral-700 hover:bg-neutral-600 rounded text-xs font-bold"
                onClick={() => setOpenModal(false)}
              >
                X
              </button>
              <div>
                <form className="grid grid-cols-4 gap-4 my-6 mx-2">
                  <div className="col-span-2">
                    <h3 className="mx-2 text-[10px]">First Name</h3>
                    <input className="bg-neutral-700 rounded-lg px-2 w-full" type="text"/>
                  </div>
                  <div className="col-span-2">
                    <h3 className="mx-2 text-[10px]">Last Name</h3>
                    <input className="bg-neutral-700 rounded-lg px-2 w-full" type="text"/>
                  </div>
                  <div className="col-span-4">
                    <h3 className="mx-2 text-[10px]">Email</h3>
                    <input className="bg-neutral-700 rounded-lg px-2 w-full" type="text"/>
                  </div>
                  <button
                    className="col-span-1 my-2 bg-blue-500 hover:bg-blue-700 py-1 px-2 rounded text-sm font-semibold">Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ButtonModal;