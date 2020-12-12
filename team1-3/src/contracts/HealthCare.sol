pragma solidity ^0.5.0;


contract HealthCare {
    address public admin;

    constructor() public {
        admin = msg.sender;
    }

    modifier adminCheck() {
        require(msg.sender == admin);
        _;
    }

    function verifyDoctor(address _address) public adminCheck {
        doctors[_address].isVerified = true;
        doctorsCounter();
    }

    uint256 public doctorCount = 0;
    mapping(address => Doctor) public doctors;
    struct Doctor {
        string name;
        bool isVerified;
    }

    function doctorsCounter() internal {
        doctorCount += 1;
    }

    function createDoctor(string memory _name) public {
        require(doctors[msg.sender].isVerified == false);     
        doctors[msg.sender] = Doctor(_name, false);
    }

    uint256 public patientCount = 0;
    mapping(address => Patient) public patients;
    struct Patient {
        string name;
        bool isVerified;
    }
    
    function patientsCounter() internal {
        patientCount += 1;
    }

    function createPatient( address _patientAddress, string memory _name) public {
        
        require(doctors[msg.sender].isVerified == true);
        require(patients[_patientAddress].isVerified == false);
        
        patients[_patientAddress] = Patient(_name, true);
        patientsCounter();
    }

    uint256 public HealthNoteCount = 0;
    mapping(uint256 => HealthNote) public healthNotes;
    struct HealthNote {
        uint256 id;
        address patient;
        address doctor;
        string title;
        string description;
        string file;
    }

    function HealthNoteCounter() internal {
        HealthNoteCount += 1;
    }
    
    
    function writeNote(
        address _patient,
        string memory _title,
        string memory _description,
        string memory _file
    ) public {
        

        require(doctors[msg.sender].isVerified == true);
        
        HealthNoteCounter();
        healthNotes[HealthNoteCount] = HealthNote(
            HealthNoteCount,
            _patient,
            msg.sender,
            _title,
            _description,
            _file
        );
    }
    uint256 public QuestionCount = 0;
    mapping(uint256 => Questionnaire) public questions;
    struct Questionnaire {
        uint256 id;
        // address patient;
        // address doctor;
        string problem;
        string symptoms;
        string previous;
        uint256 age;
    }

    function writeQuestion(
        // address _patient,
        uint256 _age,
        string memory _symptoms,
        string memory _problems,
        string memory _previous
    ) public {
        
        // require(doctors[msg.sender].isVerified == true);
        
        questions[QuestionCount] = Questionnaire(
            QuestionCount,
            // _patient,
            _problems,
             _symptoms,
             _previous,
             _age
        );
    }
}