import { IconsStyles } from "@/app/components/IconsStyles";
import { TelegramIcon, InstagramIcon, WhatsappIcon } from "./socialicons/socialicons";

export default function Socialcontact(){
return(
    <div className={`${IconsStyles.socialContainer} pb-4`}>
          <a
            href="https://t.me/xscriptor"
            target="_blank"
            className={`${IconsStyles.contacSocialIcons}`}
          >
            <TelegramIcon />
          </a>

          <a
            href="https://instagram.com/xscriptor"
            target="_blank"
            className={`${IconsStyles.contacSocialIcons}`}
          > <InstagramIcon />
          </a>

          <a
            href="https://wa.me/34666938748?text=Hello!"
            target="_blank"
            className={`${IconsStyles.contacSocialIcons}`}
          ><WhatsappIcon />
          </a>
    </div>
    );
}
