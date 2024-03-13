import React from "react";
import "./Content.css";
function Content() {
  return (
    <div className="content">
      <h2>Bank Details</h2>
      <div className="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in, iusto dicta perspiciatis fuga unde fugit nesciunt commodi quis repudiandae rerum odio amet ullam corrupti magni natus odit quae atque. Consequatur facere hic repellat minus!
      </div>
      <div className="form">
        <form>
          <div className="inside">
            <label for="accname">ACCOUNT HOLDER NAME</label>
            <input type="text" id="accname" name="account holder name" placeholder="Account Holder Name" />
            <br />
          </div>
          <div className="inside">
            <label for="accnum">ACCOUNT NUMBER</label>
            <input type="number" id="accnum" name="account number" placeholder="Account Number" />
            <br />
          </div>

          <div className="inside">
            <label for="ifsc">IFSC CODE</label>
            <input type="text" id="ifsc" name="IFSC code" placeholder="IFSC CODE"/>
            <br />
          </div>

          <div className="inside">
            <label for="bankname">BANK NAME</label>
            <input type="text" id="bnkname" name="Bank Name" placeholder="Bank Name"/>
            <br />
          </div>

          <div className="inside">
            <label for="bankcity">BANK CITY</label>
            <input type="text" id="bcity" name="City" placeholder="Bank City"/>
            <br />
          </div>

          <div className="inside">
            <label for="branchname">BRANCH NAME</label>
            <input type="text" id="braname" name="Branch Name" placeholder="Branch Name"/>
            <br />
          </div>

          <div className="inside">
            <label for="rel">RELATION WITH ACCOUNT HOLDER</label>
            <input type="text" id="relation" name="Relation" placeholder="Relation With Account Holder"/>
            <br />
          </div>

          <div className="inside">
            <label for="consent">CONSENT</label>
            <div className="con"> <input type="checkbox" id="checkbox"></input> I confirm that the information given in this form is true,complete and accurate.I understand that in case of incorrect details, Exambazzar will not be responsible for any loss of pay</div>
            
          </div>
          <button type="submit" className="btn">Save</button>

        </form>
      </div>
    </div>
  );
}

export default Content;
