package com.teckniv.teckniv;

import com.teckniv.teckniv.model.Project;
import com.teckniv.teckniv.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

//@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public void run(String... args) throws Exception {
        if (projectRepository.count() == 0) {
            initializeProjects();
        }
    }

    private void initializeProjects() {
        Project p1 = new Project();
        p1.setTitle("Oil Refinery Expansion Project");
        p1.setCategory("Oil & Gas");
        p1.setDescription("Comprehensive expansion project for a major oil refinery including piping design, 3D modeling, and stress analysis.");
        p1.setImage("/images/projects/refinery.png");
        p1.setLocation("Mumbai, India");
        p1.setDuration("18 months");
        p1.setTeam("25 engineers");
        p1.setTechnologies(List.of("AutoCAD", "PDMS", "CAESAR II"));
        p1.setFeatures(List.of("Piping Design", "3D Modeling", "Stress Analysis", "Project Management"));

        Project p2 = new Project();
        p2.setTitle("Petrochemical Plant Design");
        p2.setCategory("Petrochemicals");
        p2.setDescription("Complete design and engineering services for a new petrochemical plant with advanced process optimization.");
        p2.setImage("/images/projects/petrochemical.jpeg");
        p2.setLocation("Gujarat, India");
        p2.setDuration("24 months");
        p2.setTeam("40 engineers");
        p2.setTechnologies(List.of("SmartPlant", "AVEVA", "Aspen Plus"));
        p2.setFeatures(List.of("Process Design", "Equipment Design", "Safety Systems", "Control Systems"));

        Project p3 = new Project();
        p3.setTitle("Power Plant Modernization");
        p3.setCategory("Power Generation");
        p3.setDescription("Modernization project for a thermal power plant including efficiency improvements and emission control systems.");
        p3.setImage("/images/projects/powerplant.jpeg");
        p3.setLocation("Karnataka, India");
        p3.setDuration("12 months");
        p3.setTeam("20 engineers");
        p3.setTechnologies(List.of("Revit", "ETAP", "AutoCAD"));
        p3.setFeatures(List.of("Electrical Design", "Instrumentation", "Efficiency Analysis", "Emission Control"));
        
        Project p4 = new Project();
        p4.setTitle("Fertilizer Plant Optimization");
        p4.setCategory("Fertilizers");
        p4.setDescription("Process optimization and capacity expansion for a fertilizer manufacturing facility.");
        p4.setImage("/images/projects/fertilizerplant.jpeg");
        p4.setLocation("Tamil Nadu, India");
        p4.setDuration("15 months");
        p4.setTeam("30 engineers");
        p4.setTechnologies(List.of("PDMS", "HYSYS", "AutoCAD"));
        p4.setFeatures(List.of("Process Optimization", "Capacity Expansion", "Safety Analysis", "Quality Control"));

        Project p5 = new Project();
        p5.setTitle("Water Treatment Facility");
        p5.setCategory("Water/Wastewater");
        p5.setDescription("Design and construction of a large-scale water treatment facility with advanced filtration systems.");
        p5.setImage("/images/projects/waterplant.jpg");
        p5.setLocation("Maharashtra, India");
        p5.setDuration("20 months");
        p5.setTeam("35 engineers");
        p5.setTechnologies(List.of("AutoCAD", "Revit", "EPANET"));
        p5.setFeatures(List.of("Treatment Design", "Piping Systems", "Control Systems", "Quality Monitoring"));

        Project p6 = new Project();
        p6.setTitle("Hydrogen Production Plant");
        p6.setCategory("Hydrogen");
        p6.setDescription("Green hydrogen production facility design with renewable energy integration and storage systems.");
        p6.setImage("/images/projects/hydrogen.jpg");
        p6.setLocation("Rajasthan, India");
        p6.setDuration("22 months");
        p6.setTeam("45 engineers");
        p6.setTechnologies(List.of("AVEVA", "HYSYS", "AutoCAD"));
        p6.setFeatures(List.of("Process Design", "Renewable Integration", "Storage Systems", "Safety Design"));

        projectRepository.saveAll(List.of(p1, p2, p3, p4, p5, p6));
    }
} 