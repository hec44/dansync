var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2, '0');
var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
var YYYY = TODAY.getFullYear();
const DATE = YYYY + MM + DD;

 let part_ID =  Math.random().toString(36).substring(7);
    //Welcome
    var welcome_block = {
        data: {
            screen_id:'welcome'
        },
        type: 'html-button-response',
        stimulus: '<p>Welcome to *DANSYNC </p>'+
        '<p>This is an experimental study run by Esben Ronan, Hector Murrieta and Sara Marjanovic for our Cognitive Science class.</p>'+
        '<p> Thank you for taking 10 minutes of your day to complete this experiment for us.</p>'+
        '<p> First, let us ask you some questions.</p>'
        ,
        choices: ['Click here to continue'],
    };
    //Instructions
    var instruction_block = {
        data: {
            screen_id:'instructions'
        },
        type: 'instructions',
        pages: ["<p>For this experiment, we will ask you to watch several <b>10-second long videos</b> taken from high-profile dancers on Tiktok.</p>"+
        "<p>You will then be asked whether the dance is <b> in sync</b> with the audio or not.</p>"+
        "<p>pay attention, you will only be able to watch <b>each video once</b></p>",
                '<p>Before you do the experiment you will have the chance to <b>practice</b> with <b>2 videos</b></p>'+
                '<p>so, no pressure</p>'+
                '<p>Please be patient, the videos may take a bit of time to load</p>',
],
        show_clickable_nav: true
    };
    //Survey
    var survey_page1 = {
    data: {
            screen_id:'age_nationality'
        },
    type: 'survey-text',
    questions: [
      {prompt: 'How old are you?', columns: 3, required: true, name: 'Age'},
      {prompt: 'Where were you born?', placeholder: 'Country', columns: 50, name: 'BirthLocation'}
    ],
    randomize_question_order: false
    };

  var survey_page2 = {
        data: {
            screen_id:'gender_dancer_musician_tiktok'
        },
      type: 'survey-likert',
      questions: [
        {prompt: "what gender do you most identify as?", name: 'Gender', labels: ['male','female','non-binary'], required: true}, 
        {prompt: "How would you rank your dance experience?", name: 'Dancer', labels: ['minimal','moderate','experienced'], required: true},
        {prompt: "How would you rank your musical experience?", name:'Musician', labels: ['minimal','moderate','experienced'], required: true},
        {prompt: "How would you rank your experience with Tiktok?", name:'TikTok', labels:['none','moderate','frequent'], required: true},
        {prompt: "Do you consent to our using your <b>completely anonymised</b> data for our experiment?", name:'TikTok', labels:['yes'], required: true}
      ],
      randomize_question_oder: false
  };

    //Practice Trials

  var trial = {
    type: 'video-button-response',
    data:jsPsych.timelineVariable("data"),
    sources: jsPsych.timelineVariable("sources"),
    choices: ['yes','no',"I don't know"],
    button_html: '<button class="jspsych-btn">%choice%!</button>',
    margin_vertical: '10px',
    margin_horizontal: '8px',
    prompt: 'Is this video synchronized?',
    width: 600,
    //height: 600,
    autoplay: true,
    //controls: true,
    //start: 8,
    //stop: 9,
    rate: 1,
    //trial_duration: 2000,
    
    response_ends_trial: true
  }
  var practice_stimuli = [
      {sources:['data/videos/07.mp4'],data:{scree_id:'07',correct_ans:'0'}},
      {sources:['data/videos/26_half_lead.mp4'],data:{scree_id:'26_half_lead',correct_ans:'1'}}
  ]
  var video = ['data/videos/07.mp4','data/videos/26_half_lead.mp4']
  var practice_procedure = {
      timeline:[trial],
      timeline_variables:practice_stimuli,
      preload_video: video
};
    //Experiment instructions
    var seq1= [
        {sources:['data/videos/44_1half_lead.mp4'],data:{screen_id:'44_half_lead',correct_ans:'1'}},
         {sources:['data/videos/07_1third_lead.mp4'],data:{screen_id:'07_third_lead',correct_ans:'1'}},
   {sources:['data/videos/48.mp4'],data:{screen_id:'48',correct_ans:'0'}}, 
   {sources:['data/videos/61_1third_lag.mp4'],data:{screen_id:'61_third_lag',correct_ans:'1'}},
   {sources:['data/videos/44.mp4'],data:{screen_id:'44',correct_ans:'0'}},
    {sources:['data/videos/01.mp4'],data:{screen_id:'01',correct_ans:'0'}},
   {sources:['data/videos/22_1thirds_lag.mp4'],data:{screen_id:'22_third_lag',correct_ans:'1'}}, 
   {sources:['data/videos/13_1thirds_lag.mp4'],data:{screen_id:'13_third_lag',correct_ans:'1'}},
   {sources:['data/videos/07_half_lead.mp4'],data:{screen_id:'07_half_lead’',correct_ans:'1'}},
   {sources:['data/videos/22.mp4'],data:{screen_id:'61',correct_ans:'0'}},
   {sources:['data/videos/27_half_lead.mp4'],data:{screen_id:'27_half_lead',correct_ans:'1'}},
   {sources:['data/videos/26.mp4'],data:{screen_id:'26',correct_ans:'0'}},
   {sources:['data/videos/48_half_lag.mp4'],data:{screen_id:'48_half_lag',correct_ans:'1'}},
   {sources:['data/videos/01_1third_lag.mp4'],data:{screen_id:'01_third_lag',correct_ans:'1'}},
   {sources:['data/videos/13_1thirds_lead.mp4'],data:{screen_id:'13_third_lead',correct_ans:'1'}},
   {sources:['data/videos/22_1half_lag.mp4'],data:{screen_id:'22_half_lag',correct_ans:'1'}}, 
   {sources:['data/videos/27.mp4'],data:{screen_id:'27',correct_ans:'0'}},
   {sources:['data/videos/44_1thirds_lag.mp4'],data:{screen_id:'44_third_lag',correct_ans:'1'}},
   {sources:['data/videos/26_half_lead.mp4'],data:{screen_id:'26_half_lead',correct_ans:'1'}},
   {sources:['data/videos/01_half_lead.mp4'],data:{screen_id:'01_half_lead',correct_ans:'1'}}, 
   {sources:['data/videos/07.mp4'],data:{screen_id:'07',correct_ans:'0'}},
   {sources:['data/videos/61_1third_lead.mp4'],data:{screen_id:'61_third_lead’',correct_ans:'1'}},
   {sources:['data/videos/48_half_lead.mp4'],data:{screen_id:'48_half_lead',correct_ans:'1'}},
   {sources:['data/videos/26_1third_lead.mp4'],data:{screen_id:'26_third_lead',correct_ans:'1'}}, 
   {sources:['data/videos/27_1third_lead.mp4'],data:{screen_id:'27_third_lead',correct_ans:'1'}},
   {sources:['data/videos/13.mp4'],data:{screen_id:'13',correct_ans:'0'}} 
    ];

    var seq2 = [
        {sources:['data/videos/01_half_lag.mp4'],data:{screen_id:'01_half_lag',correct_ans:'0'}},
        {sources:['data/videos/44_1half_lag.mp4'],data:{screen_id:'44_half_lag',correct_ans:'0'}},
        {sources:['data/videos/61_half_lead.mp4'],data:{screen_id:'61_half_lead',correct_ans:'0'}},
        {sources:['data/videos/26_1third_lag.mp4'],data:{screen_id:'26_third_lag',correct_ans:'0'}},
        {sources:['data/videos/22_1thirds_lead.mp4'],data:{screen_id:'22_third_lead',correct_ans:'0'}},
        {sources:['data/videos/61_half_lag.mp4'],data:{screen_id:'61_half_lag',correct_ans:'0'}},
        {sources:['data/videos/07_1third_lag.mp4'],data:{screen_id:'07_third_lag',correct_ans:'0'}},
        {sources:['data/videos/01.mp4'],data:{screen_id:'01',correct_ans:'1'}},
        {sources:['data/videos/27.mp4'],data:{screen_id:'27',correct_ans:'1'}},
        {sources:['data/videos/26.mp4'],data:{screen_id:'26',correct_ans:'1'}},
        {sources:['data/videos/01_1third_lead.mp4'],data:{screen_id:'01_third_lead',correct_ans:'0'}},
        {sources:['data/videos/22_1half_lead.mp4'],data:{screen_id:'22_half_lead',correct_ans:'0'}},
        {sources:['data/videos/44_1thirds_lead.mp4'],data:{screen_id:'44_third_lead',correct_ans:'0'}},
        {sources:['data/videos/13.mp4'],data:{screen_id:'13',correct_ans:'1'}},
        {sources:['data/videos/48_1third_lag.mp4'],data:{screen_id:'48_third_lag',correct_ans:'0'}},
        {sources:['data/videos/07.mp4'],data:{screen_id:'07',correct_ans:'1'}},
        {sources:['data/videos/27_half_lag.mp4'],data:{screen_id:'27_half_lag',correct_ans:'0'}},
        {sources:['data/videos/13_1half_lead.mp4'],data:{screen_id:'13_half_lead',correct_ans:'0'}},
        {sources:['data/videos/61.mp4'],data:{screen_id:'61',correct_ans:'1'}},
        {sources:['data/videos/48_1third_lead.mp4'],data:{screen_id:'48_third_lead',correct_ans:'0'}},
        {sources:['data/videos/22.mp4'],data:{screen_id:'22',correct_ans:'1'}},
        {sources:['data/videos/07_half_lag.mp4'],data:{screen_id:'07_half_lag',correct_ans:'0'}},
        {sources:['data/videos/26_half_lag.mp4'],data:{screen_id:'26_half_lag',correct_ans:'0'}},
        {sources:['data/videos/48.mp4'],data:{screen_id:'48',correct_ans:'1'}},
        {sources:['data/videos/13_1half_lag.mp4'],data:{screen_id:'13_half_lag',correct_ans:'0'}},
        {sources:['data/videos/44.mp4'],data:{screen_id:'44',correct_ans:'1'}},
        {sources:['data/videos/27_1third_lag.mp4'],data:{screen_id:'27_third_lag',correct_ans:'0'}}
        ];
    var videos=[
        ['data/videos/44_1half_lead.mp4','data/videos/07_1third_lead.mp4','data/videos/48.mp4','data/videos/61_1third_lag.mp4','data/videos/44.mp4','data/videos/01.mp4','data/videos/22_third_lag.mp4','data/videos/13_third_lag.mp4','data/videos/07_half_lead.mp4','data/videos/22.mp4','data/videos/22.mp4','data/videos/27_half_lead.mp4','data/videos/22.mp4','data/videos/48_half_lag.mp4','data/videos/01_third_lag.mp4','data/videos/13_third_lead.mp4','data/videos/22_half_lag.mp4','data/videos/27.mp4','data/videos/44_third_lag.mp4','data/videos/26_half_lead.mp4','data/videos/01_half_lead.mp4','data/videos/07.mp4','data/videos/61_third_lead.mp4','data/videos/48_half_lead.mp4','data/videos/26_third_lead.mp4','data/videos/27_third_lead.mp4','data/videos/13.mp4'],
        ['data/videos/01_half_lag.mp4','data/videos/44_half_lag.mp4','data/videos/61_half_lead.mp4','data/videos/26_third_lag.mp4','data/videos/22_third_lead.mp4','data/videos/61_half_lag.mp4','data/videos/07_third_lag.mp4','data/videos/01.mp4','data/videos/27.mp4','data/videos/26.mp4','data/videos/01_third_lead.mp4','data/videos/22_half_lead.mp4','data/videos/44_third_lead.mp4','data/videos/13.mp4','data/videos/48_third_lag.mp4','data/videos/07.mp4','data/videos/27_half_lag.mp4','data/videos/13_half_lead.mp4','data/videos/61.mp4','data/videos/48_third_lead.mp4','data/videos/22.mp4','data/videos/07_half_lag.mp4','data/videos/26_half_lag.mp4','data/videos/48.mp4','data/videos/13_half_lag.mp4','data/videos/44.mp4','data/videos/27_third_lag.mp4']

    ];

    var seq_choice=[seq1,seq2];
    let random_index=Math.floor(Math.random() * Math.floor(2));
    console.log(random_index);

    var experiment_procedure = {
        timeline:[trial],
        timeline_variables:seq_choice[random_index],
  };
  var experiment_start = {
    data: {
        screen_id:'experiment_start'
    },
    type: 'instructions',
    pages: ['Good job! Now we will start with the experiment. Please remember to pay attention, as you will only be able to watch each video once before answering.'],
    show_clickable_nav: true
};
   
    //Experimental trials
    //Debrief

    //timeline
    timeline = [];
    timeline.push(welcome_block);
    timeline.push(survey_page1);
    timeline.push(survey_page2);
    timeline.push(instruction_block);
    timeline.push(practice_procedure);
    timeline.push(experiment_start);
    timeline.push(experiment_procedure);

function startExperiment(){
    jsPsych.init({
        timeline: timeline,
        show_progress_bar: true,
        on_finish: function() {
            $.ajax({
                type: "POST",
                url: "/experiment-data",
                data: JSON.stringify(jsPsych.data.get().values()),
                contentType: "application/json"
            }).done(function() {
                window.location.href = "finish";
            }).fail(function() {
                alert("Problem occurred while writing data to Dropbox. " +
                    "Data will be saved to your computer. " +
                    "Please contact the experimenter regarding this issue!");
                var csv = jsPsych.data.get().csv();
                var filename = Math.random().toString(36).substring(7) + "_" + DATE + ".csv";
                console.log(filename);
                downloadCSV(csv, filename);
                window.location.href = "finish";
            });
        }

    })
};
