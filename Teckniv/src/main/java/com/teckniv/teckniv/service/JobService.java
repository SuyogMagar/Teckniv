package com.teckniv.teckniv.service;

import com.teckniv.teckniv.model.Job;
import com.teckniv.teckniv.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Optional<Job> getJobById(Long id) {
        return jobRepository.findById(id);
    }

    public Job updateJob(Long id, Job jobDetails) {
        return jobRepository.findById(id).map(job -> {
            job.setTitle(jobDetails.getTitle());
            job.setDescription(jobDetails.getDescription());
            job.setLocation(jobDetails.getLocation());
            job.setPostedDate(jobDetails.getPostedDate());
            job.setSalary(jobDetails.getSalary());
            return jobRepository.save(job);
        }).orElseThrow(() -> new RuntimeException("Job not found"));
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
} 