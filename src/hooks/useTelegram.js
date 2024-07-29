
export function useTelegram(){
    const tg =  window.Telegram.WebApp
    const onClose = () =>{
        tg.close()
    }
    const onToggleButton = () =>{
        if(tg.MainButton.isVisible){
            tg.MainButton.show()
        }else{
            tg.MainButton.hide()
        }
    }
    return{
        tg,
        onClose,
        onToggleButton,
        user: tg.initDataUnsafe?.user
    }

}