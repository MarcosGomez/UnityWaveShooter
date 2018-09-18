import UnityEngine.UI;

var startingHealth : int = 100;                             // The amount of health the player starts the game with.
var startingStamina: float = 100;
var currentHealth : int;                                    // The current health the player has.
var currentStamina: float;
var healthSlider : Slider;                                  // Reference to the UI's health bar.
var staminaSlider: Slider;
var damageImage : Image;                                    // Reference to an image to flash on the screen on being hurt.
//var deathClip : AudioClip;                                  // The audio clip to play when the player dies.
var flashSpeed : float= 5f;                             // The speed the damageImage will fade at.
var flashColour : Color = new Color(1f, 0f, 0f, 0.1f);      // The colour the damageImage is set to, to flash.



private var isDead : boolean;                                                // Whether the player is dead.
private var damaged : boolean;                                               // True when the player gets damaged


function Awake ()
{

    // Set the initial health of the player.
    currentHealth = startingHealth;
    currentStamina = startingStamina;
}


function Update ()
{
    // If the player has just been damaged...
    if(damaged)
    {
        // ... set the colour of the damageImage to the flash colour.
        damageImage.color = flashColour;
    }
    // Otherwise...
    else
    {
        // ... transition the colour back to clear.
        damageImage.color = Color.Lerp (damageImage.color, Color.clear, flashSpeed * Time.deltaTime);
    }

    // Reset the damaged flag.
    damaged = false;
    
    //Check stamina
    if(char_script.sprint){
    	//TEST. Remove later
    	ScoreManager.score++;
    	
    	currentStamina -= .5;
    	if(currentStamina < 0){
    		currentStamina = 0;
    		char_script.sprint = false;
    	}
    }else{
    	//Gain stamina over time
    	currentStamina += .5;
    	if(currentStamina > 100){
    		currentStamina = 100;
    	}
    }
    staminaSlider.value = currentStamina;
}


public function TakeDamage (amount : int)
{
    // Set the damaged flag so the screen will flash.
    damaged = true;

    // Reduce the current health by the damage amount.
    currentHealth -= amount;

    // Set the health bar's value to the current health.
    healthSlider.value = currentHealth;

    // Play the hurt sound effect.
    //playerAudio.Play ();

    // If the player has lost all it's health and the death flag hasn't been set yet...
    if(currentHealth <= 0 && !isDead)
    {
        //it should die.
        
    }
}


